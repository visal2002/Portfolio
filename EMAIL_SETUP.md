# Email Setup Guide - Get Direct Email Sending Working

Your contact form currently uses a mailto fallback. To enable **direct email sending** (emails go straight to your Gmail inbox), follow these steps:

## Quick Setup with EmailJS (5 minutes, FREE)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (free account - 200 emails/month)
3. Sign up with your email

### Step 2: Add Email Service
1. In dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your email provider)
4. Click **Connect Account** and authorize
5. **Copy the Service ID** (looks like: `service_xxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

**Subject:**
```
New Message from Portfolio: {{subject}}
```

**Content:**
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio website.
```

4. Set **To Email** to: `chettrivishal677@gmail.com`
5. **Copy the Template ID** (looks like: `template_xxxxx`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find **Public Key**
3. **Copy the Public Key** (looks like: `xxxxxxxxxxxxx`)

### Step 5: Update Code
1. Open `src/App.jsx`
2. Find these lines (around line 69-71):
```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

3. Replace with your actual values:
```javascript
const EMAILJS_SERVICE_ID = 'service_xxxxx' // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxx' // Your Template ID
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxx' // Your Public Key
```

### Step 6: Test and Deploy
```bash
npm run build
git add .
git commit -m "Configure EmailJS for contact form"
git push
```

## That's It!

Once configured, when someone submits the form:
- ✅ Email is sent **directly** to `chettrivishal677@gmail.com`
- ✅ No email client required for the sender
- ✅ You receive the email in your Gmail inbox
- ✅ Free tier: 200 emails/month

## Current Status

Right now, the form uses a **mailto fallback** which:
- ✅ Works immediately (no setup needed)
- ⚠️ Opens user's email client
- ⚠️ Requires user to click send in their email app

After EmailJS setup:
- ✅ Sends directly from website
- ✅ Better user experience
- ✅ No email client needed

