import React from "react";

export function MapEmbed() {
  return (
    <div className="h-72 md:h-96 overflow-hidden rounded-2xl"
         style={{ border: "1px solid rgba(200,135,74,.2)" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.407!2d77.4026!3d23.2599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
        width="100%" height="100%" style={{ border: 0 }}
        allowFullScreen loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Student Café Location"
      />
    </div>
  );
}
