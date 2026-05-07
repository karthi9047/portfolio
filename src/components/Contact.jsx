import React from 'react';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // To send emails without opening an email client, get a free key at https://web3forms.com/
    // and replace "YOUR_ACCESS_KEY_HERE" with your actual key.
    formData.append("access_key", "9a514b20-9293-4247-8300-c28760880d06");
    // Fallback: If no access key is provided (or if it's the default string), open the default email app
    if (formData.get("access_key") === "YOUR_ACCESS_KEY_HERE" || !formData.get("access_key")) {
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
      window.location.href = `mailto:keerthivasanvbe@gmail.com?subject=Portfolio Contact from ${name}&body=${message}%0D%0A%0D%0AReply directly to: ${email}`;
      setResult("Opened email client!");
      setTimeout(() => setResult(""), 3000);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        setResult("Failed to send message.");
      }
    } catch (error) {
      setResult("An error occurred.");
    }

    setTimeout(() => setResult(""), 5000);
  };

  return (
    <section id="contact" className="section" style={{ minHeight: '60vh', paddingBottom: '50px', justifyContent: 'center' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px', width: '100%' }}>
          <h2 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', fontWeight: 800, lineHeight: 1 }}>LET'S TALK</h2>
        </div>
        <div className="contact-form-container" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-group-outline">
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter name" required />
            </div>
            <div className="form-group-outline">
              <label>Mail</label>
              <input type="email" name="email" placeholder="Enter email" required />
            </div>
            <div className="form-group-outline">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="Write your Message" required></textarea>
            </div>
            <button type="submit" className="submit-btn-filled" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
              {result ? result : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
