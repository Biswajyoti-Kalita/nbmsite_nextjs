import { sendEmail } from "@/lib/email";
import { NextRequest, NextResponse } from "next/server";

type PopupVersion = "v1" | "v2";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const portalId = process.env.HUBSPOT_PORTAL_ID || "22605202";
    const formGuid = process.env.HUBSPOT_CAMPAIGN_ENQUIRY_FORM_GUID || "e2e526b9-d510-4a58-93b3-1b80ce1071a8";


    if (!portalId || !formGuid) {
      return NextResponse.json(
        {
          success: false,
          error:
            "HubSpot is not configured. Set HUBSPOT_PORTAL_ID and HUBSPOT_CAMPAIGN_ENQUIRY_FORM_GUID.",
        },
        { status: 500 }
      );
    }

    const body = (await request.json()) as {
      firstName?: string;
      email?: string;
      advertisingLine?: string;
      budgetRange?: string | null;
      popupVersion?: PopupVersion;
      hutk?: string | null;
      pageUri?: string | null;
      pageName?: string | null;
    };

    const firstName = (body.firstName || "").trim();
    const email = (body.email || "").trim();
    const advertisingLine = (body.advertisingLine || "").trim();
    const budgetRange = body.budgetRange ? String(body.budgetRange) : "";
    const popupVersion = body.popupVersion === "v2" ? "v2" : "v1";

    if (!firstName || !email || !advertisingLine) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }


    try {
      // Send admin notification email
      await sendEmail(
        'biswa@nextbroadcastmedia.com',
        `New Form V1/V2`,
        `
          <h2>New Form V1/V2</h2>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Advertising Line:</strong> ${advertisingLine}</p>
          <p><strong>Budget Range:</strong> ${budgetRange}</p>
          <p><strong>Popup Version:</strong> ${popupVersion}</p>
        `
      );
    } catch (error) {
      console.error('Email sending failed:', error);
    }


    // HubSpot expects "fields" to match the internal names on your HubSpot form.
    // Create your HubSpot form with these internal names (recommended):
    // - firstname
    // - email
    // - what_are_you_advertising
    // - budget_range (optional)
    // - popup_version (hidden)
    const fields = [
      { name: "firstname", value: firstName },
      { name: "email", value: email },
      { name: "what_are_you_advertising", value: advertisingLine },
      { name: "popup_version", value: popupVersion },
      ...(budgetRange ? [{ name: "budget_range", value: budgetRange }] : []),
    ];

    const hutk = body.hutk ? String(body.hutk) : undefined;
    const pageUri = body.pageUri ? String(body.pageUri) : undefined;
    const pageName = body.pageName ? String(body.pageName) : undefined;

    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${encodeURIComponent(
      portalId
    )}/${encodeURIComponent(formGuid)}`;

    const hsRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields,
        context: {
          ...(hutk ? { hutk } : {}),
          ...(pageUri ? { pageUri } : {}),
          ...(pageName ? { pageName } : {}),
        },
      }),
    });

    if (!hsRes.ok) {
      const text = await hsRes.text().catch(() => "");
      return NextResponse.json(
        {
          success: false,
          error: `HubSpot submission failed (${hsRes.status}). ${text || ""}`.trim(),
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

