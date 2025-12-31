# EmailJS Setup Guide

The contact form is currently using a mailto fallback, which opens the user's email client. To enable direct email sending without requiring an email client, follow these steps to set up EmailJS:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Create an Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Note your **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `xxxxxxxxxxxxx`)

## Step 5: Update the Code

Open `src/App.jsx` and find these lines (around line 30):

```javascript
const serviceId = 'service_portfolio' // Replace with your EmailJS service ID
const templateId = 'template_portfolio' // Replace with your EmailJS template ID
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
```

Replace them with your actual values:

```javascript
const serviceId = 'service_xxxxx' // Your actual service ID
const templateId = 'template_xxxxx' // Your actual template ID
const publicKey = 'xxxxxxxxxxxxx' // Your actual public key
```

## Step 6: Rebuild and Deploy

```bash
npm run build
git add .
git commit -m "Configure EmailJS for contact form"
git push
```

## Current Status

The form currently works with a **mailto fallback**, which means:
- ✅ Works immediately without any setup
- ✅ Opens user's email client with pre-filled message
- ⚠️ Requires user to have email client configured

With EmailJS configured:
- ✅ Sends email directly from the website
- ✅ No email client required
- ✅ Better user experience
- ✅ You receive emails directly in your inbox

