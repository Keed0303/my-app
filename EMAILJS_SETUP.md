# EmailJS Setup Instructions

## 📧 Setting up EmailJS for Contact Form

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service
1. Navigate to [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
2. Click on "Email Services" in the left sidebar
3. Click "Add New Service"
4. Choose your email provider (Gmail, Outlook, etc.)
5. Follow the connection steps for your provider
6. Copy the **Service ID** (e.g., `service_xxxxxxx`)

### 3. Create Email Template
1. Click on "Email Templates" in the left sidebar
2. Click "Create New Template"
3. Design your email template using these variables:
   ```
   From: {{from_name}} <{{from_email}}>
   Subject: New Contact Form Submission from Portfolio

   Name: {{from_name}}
   Email: {{from_email}}

   Message:
   {{message}}
   ```
4. Save the template and copy the **Template ID** (e.g., `template_xxxxxxx`)

### 4. Get Your Public Key
1. Click on "Account" in the left sidebar
2. Go to the "API Keys" tab
3. Copy your **Public Key** (e.g., `xxxxxxxxxxxxxxxx`)

### 5. Add Credentials to Environment Variables
1. Open `.env.local` file in your project root
2. Replace the placeholder values with your actual credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```

### 6. Restart Development Server
After adding environment variables, restart your dev server:
```bash
# Stop the current server (Ctrl+C)
bun run dev
```

### 7. Test the Contact Form
1. Click the "Email Me" button on your hero section
2. Fill out the contact form with test data
3. Submit and check your connected email inbox
4. Check the EmailJS dashboard logs at [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)

### 8. Free Tier Limits
EmailJS free tier includes:
- 200 emails per month
- No credit card required
- Perfect for portfolio contact forms!

## 📁 Files Modified

1. **`components/layouts/hero.tsx`** - Updated to use EmailJS client-side API
2. **`.env.local`** - Environment variables for EmailJS credentials
3. **`package.json`** - Added `@emailjs/browser` package

## 🔒 Security Notes

- Environment variables with `NEXT_PUBLIC_` prefix are exposed to the browser
- This is safe for EmailJS public key - it's designed to be public
- EmailJS validates requests on their servers to prevent abuse
- Never commit `.env.local` to Git (it's already in `.gitignore`)

## 🎨 Email Template Customization

You can customize your email template directly in the EmailJS dashboard:

1. Go to Email Templates
2. Click on your template
3. Edit the Subject, Content, and Reply-To fields
4. Use variables like `{{from_name}}`, `{{from_email}}`, and `{{message}}`
5. Preview and test your template
6. Save changes

## 🐛 Troubleshooting

**Error: "Missing environment variables"**
- Make sure `.env.local` exists with all three EmailJS variables
- Ensure variable names start with `NEXT_PUBLIC_`
- Restart your dev server after adding environment variables

**Emails not sending:**
- Check the browser console for errors
- Verify all three credentials are correct in `.env.local`
- Check EmailJS dashboard logs for failed requests
- Ensure your email service is properly connected in EmailJS dashboard

**Error: "The public key is required"**
- Make sure you copied the Public Key from EmailJS Account → API Keys
- Ensure it's set in `.env.local` as `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

**Rate limit exceeded:**
- Free tier: 200 emails/month
- Monitor usage in EmailJS dashboard
- Consider upgrading or implementing client-side request throttling

## 📊 Monitoring

Monitor your email submissions:
1. Go to [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
2. Check "History" to see all sent emails
3. View success/failure status and error messages
4. Track monthly usage quota

## 🚀 Production Deployment

When deploying to production (Vercel, Netlify, etc.):
1. Add the three environment variables to your hosting platform
2. Use the same variable names: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
3. Redeploy your application
4. Test the contact form on production
