# Contact Form Setup - Formspree

Your contact form is now configured to send emails directly to **chettrivishal677@gmail.com** using Formspree.

## Quick Setup (2 minutes):

1. **Go to [Formspree.io](https://formspree.io/)** and sign up for a free account
2. **Create a new form** - Click "New Form"
3. **Set the email** - Enter `chettrivishal677@gmail.com` as the recipient
4. **Copy your Form ID** - It will look like `xpwnvqjz` or similar
5. **Update the code** - Replace `xpwnvqjz` in `src/App.jsx` with your actual Form ID

## Find the line in src/App.jsx:

```javascript
const response = await fetch('https://formspree.io/f/xpwnvqjz', {
```

Replace `xpwnvqjz` with your Formspree form ID.

## That's it!

Once you update the form ID, emails will be sent directly to your Gmail inbox when users submit the form.

**Free tier includes:** 50 submissions per month (perfect for a portfolio site!)

