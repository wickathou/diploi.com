---
title: 'Hosting a Ghost blog in seconds on Diploi, with support for custom development'
description: 'Learn how to create blogs and websites with Ghost using Diploi'
author: 'Javier'
timestamp: '2025-08-27T07:11:05.573Z'
# devtoUrl: ''
image: '/blog/hosting_a_ghost_blog/hosting_a_ghost_blog_cover.png'
social_image: 'https://diploi.com/blog/hosting_a_ghost_blog/hosting_a_ghost_blog_og.png'
draft: false
---

###### Launching a Ghost blog using Diploi to customize and host it

If you are into self-hosting open-source services, this guide will be useful for you. Diploi gets you from zero to a live blog in seconds, and the best part is that you can also customize your Ghost blogs at code level, without the need to run anything locally using Diploi's remote development capabilities. Let's get straight to it!

---

## What you’ll need

- A GitHub account. If you don’t have one yet, sign up here: [https://github.com/signup](https://github.com/signup)

---

## Creating a blog with Ghost

1. **Sign up** for Diploi at `https://console.diploi.com/` using your GitHub account.
2. In your dashboard, click **Create Project +**
3. Under **Pick Components**, choose **Ghost**  
   If you want to expand your Ghost blog with other tools, like a backend framework to add an API, in this section you can add them. They will all be hosted on a single server, reducing costs and complexity.
4. In **Pick Add-ons**, select any databases or tools you want to include.
5. In **Repository**, choose **Create Repository** which will generate a new GitHub repo for you.
6. Click **Launch Stack**

Diploi provisions a full cloud dev environment where you can:

- Preview your Ghost site instantly
- Work in the browser IDE, **or** connect over SSH with your favorite editor (VS Code, Cursor, etc.)

---

## Ship your Ghost blog to Production

Once you are ready to create launch your blog to production, you can create a new deployment, ready to receive your users:

1. Open your project’s dashboard:  
   `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>`
2. Click **Create Deployment +**
3. Choose **Production** as the stage
4. Pick a **cluster size** that fits your needs
5. Select the **source branch** to deploy (e.g. `main`)
6. Add any necessary **environment variables**
7. Click **Create Deployment +**

That’s it, your Ghost blog is deployed and ready to scale.

---

## Set up a custom domain for your Ghost site

By default, you’ll get a `.diploi.me` URL. To use your own domain:

1. Go to your Production deployment’s **Options** tab:  
   `https://console.diploi.com/<YOUR_USERNAME>/project/<YOUR_PROJECT_ID>/deployment/<YOUR_DEPLOYMENT_ID>/options`
2. In **Endpoints**, disable **Use Auto-Generated Endpoints**
3. You’ll see your current subdomain and a **Use custom domain** checkbox
4. Enable it and enter your domain (e.g. `example.com`)
5. Scroll down and **Save Changes**
6. In your DNS provider, create a **CNAME** record pointing your domain to **edge.diploi.com**

Allow up to ~30 minutes for DNS and SSL to propagate.

---

## New to Ghost? Try it in the cloud first for free

You don’t need a local setup to explore Ghost on Diploi:

- **No account yet?**  
  Use the **Stack Builder** to spin up a temporary environment and test the workflow [https://diploi.com/#StackBuilder](https://diploi.com/#StackBuilder) without registering an account and free.

- **Already signed in?**  
  Create a new project and select **Quick Launch** in the **Repository** section to start experimenting without wiring up a new repository.

---

What other open source tools would you like us to support? Let us know on [Discord](https://discord.gg/vvgQxVjC8G), we are looking forward to hear more ideas that could help us improve! 🤗

---

**References:**

- Ghost Docs https://ghost.org/docs/
- Diploi Components https://docs.diploi.com/building/components
- Diploi Ghost Component (GitHub) https://github.com/diploi/component-ghost
- Custom Domains https://docs.diploi.com/deploying/custom-domain/
