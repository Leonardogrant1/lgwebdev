import type { RequestEvent } from "@sveltejs/kit";
import nodemailer from "nodemailer";

export const POST = async ({ request }: RequestEvent) => {
  const { name, email, phone, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: "leonardogranetto.business@gmail.com",
      pass: "wlazdvopdtfpdqzo", //TODO brauch ich neue
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "leonardogranetto.business@gmail.com",
      replyTo: email,
      subject: "Neue Anfrage!",
      html: `
          <h4>Name: ${name} </h4>
          <h4>Email: ${email} </h4>
          <h4>Email: ${phone} </h4>

          <p>Message: ${message} </p>
          `,
    });

    //   await FacebookConversionsAPI.triggerContactEvent(
    //     name,
    //     name,
    //     email,
    //     phone,
    //     request
    //   );
    return new Response("OK", { status: 200 });
  } catch (e) {
    console.log(JSON.stringify(e));

    return new Response(
      "Could not send the email. Your message was not sent.",
      { status: 500 }
    );
  }
};
