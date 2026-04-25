# Facebook CV Design Booking Agent (Daily Posts + Reels + DM Sales Bot)

This document gives you a practical agent system for your Facebook page that does 4 jobs:

1. Publish daily posts.
2. Publish daily reels.
3. Chat with clients in Messenger automatically.
4. Convert chats into booked CV design orders.

---

## 1) What you are building

You need **one workflow automation** and **one chat assistant**:

- **Automation tool** (recommended: Make.com or n8n)
  - Schedules daily content.
  - Stores leads and booking status.
  - Sends follow-up reminders.
- **Messenger chatbot** (recommended: ManyChat + OpenAI API)
  - Replies instantly.
  - Qualifies the client.
  - Collects order details and payment proof.
  - Hands off to you when required.

---

## 2) Funnel (simple and effective)

Use this exact flow:

**Post/Reel → DM keyword → Chat qualification → Offer packages → Collect details → Payment link → Confirm booking → Start work**

### DM trigger keywords

Set these keywords in Messenger automation:

- `CV`
- `resume`
- `hire`
- `job`
- `portfolio`

When user sends one of these, chatbot starts the sales flow.

---

## 3) Daily content engine

Create a 30-day rotating content plan:

- 10 educational posts (CV mistakes, ATS tips, interview tips)
- 10 transformation/case-study posts (before/after CV)
- 10 offer posts (packages + CTA)

### Reel structure (15–30 sec)

1. Hook (0–3s): “Your CV is why you are not getting interviews.”
2. Value (3–18s): 2–3 quick fixes.
3. CTA (18–30s): “DM me `CV` and I’ll review yours.”

### Posting schedule

- 1 feed post/day
- 1 reel/day
- Best times to test: **12:00 PM** and **7:00 PM** local time

Track weekly and keep the better-performing slot.

---

## 4) Chatbot script (copy/paste)

## Welcome message

> Hey 👋 Thanks for messaging!
> I help job seekers get interview-winning CVs.
> Do you want:
> 1) CV redesign
> 2) CV + cover letter
> 3) Full job pack (CV + cover letter + LinkedIn)

## Qualification questions

Ask one by one:

1. “What job role are you targeting?”
2. “How many years of experience do you have?”
3. “Do you already have an old CV? (Yes/No)”
4. “When do you need it? (Urgent / 2-3 days / This week)”

## Offer message

> Perfect — based on your goal, I recommend **[PACKAGE]**.
> Delivery: **[TIME]**
> Price: **[PRICE]**
> If you want, I can book your slot now ✅

## Booking step

> To confirm your booking, please send:
> - Full name
> - Email
> - WhatsApp number
> - Target job title
> - Current CV (file)
> After payment, I’ll send your delivery date immediately.

## Payment confirmation

> Payment received ✅
> Your CV project is booked.
> Delivery date: **[DATE]**
> I’ll now begin work and update you with the first draft.

---

## 5) Package example

Use 3 simple options:

- **Basic**: CV redesign only
- **Standard**: CV + cover letter
- **Premium**: CV + cover letter + LinkedIn optimization

Add:

- 1 revision included
- Fast-delivery add-on fee for urgent orders

---

## 6) Auto follow-up messages

If no reply after 12 hours:

> Just checking in 👋
> Do you want me to reserve your CV slot for this week?

If no payment after offer (24 hours):

> I can keep your package price active for today.
> Reply **BOOK** and I’ll confirm your slot.

---

## 7) Minimum tech stack

- **Facebook Page + Messenger**
- **ManyChat** for bot flows
- **OpenAI API** for smart replies
- **Google Sheets / Airtable** as lead CRM
- **Stripe/PayPal/Local payment link** for booking confirmation
- **Canva** templates for daily post/reel production

---

## 8) Lead sheet columns (must have)

- Lead ID
- Date
- Name
- Profile link
- Service interested
- Budget
- Deadline
- Status (New / Qualified / Offered / Paid / In progress / Delivered)
- Payment status
- Delivery date
- Notes

---

## 9) KPI targets (weekly)

- DMs started
- Qualified leads
- Offers sent
- Paid bookings
- Conversion rate = paid bookings / qualified leads
- Average order value

Start with a target of **10%+ qualified-to-paid conversion**.

---

## 10) Human handoff rules

Bot should stop and hand over to you if:

- client asks custom/complex pricing,
- client is angry or complains,
- client asks for a voice call,
- payment issue happens.

Handoff message:

> Thanks! I’m connecting you with the CV specialist now.
> You’ll get a personal reply shortly.

---

## 11) 7-day launch checklist

Day 1:
- Set up packages, pricing, payment links.

Day 2:
- Build Messenger flow (welcome → qualify → offer → booking).

Day 3:
- Connect OpenAI for natural replies.

Day 4:
- Create 7 posts + 7 reels in Canva.

Day 5:
- Connect lead sheet + booking status automation.

Day 6:
- Test full DM-to-payment flow with a friend account.

Day 7:
- Go live + monitor + optimize first CTA/reply times.

---

## 12) Important policy note

Follow Meta platform policies and local advertising rules. Avoid fake claims like “100% guaranteed job.”

Use safer promise language:
- “professionally optimized CV”
- “ATS-friendly formatting”
- “designed to improve interview chances”

