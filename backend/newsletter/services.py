import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from django.urls import reverse
from django.template.loader import render_to_string
from django.urls import reverse
from django.utils.html import strip_tags
from premailer import transform

def send_verification(token, guest_email):
        verification_url = 'http://127.0.0.1:8000' + reverse('verify_email', args=[token])
        subject = "Welcome To Ground Zero: Verify Your Email Please"
        html_content = render_to_string('email_template.html', {'verification_url': verification_url})
        html_content_with_inline_styles = transform(html_content)
        email = "bouaziz.tech@gmail.com"
        receiver_email = guest_email
        message = MIMEMultipart("alternative")
        message["Subject"] = subject
        message["From"] = email
        message["To"] = receiver_email
        part = MIMEText(html_content_with_inline_styles, "html")
        message.attach(part)

        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(email, "sdeehbltgxzkdivt")
        server.sendmail(email, receiver_email, message.as_string())
        print("Email Sent")