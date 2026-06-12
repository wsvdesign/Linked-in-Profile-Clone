**Product Requirements Document: Net New Build**

**LinkedIn Profile Page Clone**

| Build name: | LinkedIn Profile Page Clone |
| :---- | :---- |
| **Owner:** | Natalie Walker and Marc Perez |
| **Date:** | June 8, 2026 |

# **1\. PROBLEM**

Professionals, students, and job seekers need one recognizable page that organizes their name, headline, location, contact actions, summary, experience, education, skills, activity, and credibility signals. LinkedIn solves this through its professional profile page, which users already understand as a standard format for online career identity. For this build, the problem is that the team must recreate that LinkedIn profile page experience as a focused clone within a limited development window, without drifting into the full LinkedIn platform.

Users experience fragmented professional identity online because work history, education, skills, projects, posts, and social proof often live across separate documents or websites. The impact is a weaker first impression and more friction for anyone trying to understand who the user is, what they do, and why they are credible.

## **Supporting Context**

* LinkedIn’s profile page is a widely recognized professional identity surface, with a consistent hierarchy: profile header, About, Activity, Experience, Education, Skills, Featured content, and sidebar cards.  
* The earlier project work identified that the PRD needed to name the LinkedIn clone reference clearly and keep the build scoped to a realistic two-week MVP instead of cloning an entire platform.  
* LinkedIn’s growth from 2020 through 2026 supports the product decision to clone the profile page because the profile is the foundation for hiring, networking, subscriptions, advertising, and AI recruiting tools.

# **1a. OPPORTUNITY**

The opportunity is to build a polished, recognizable clone of the LinkedIn profile page that demonstrates product thinking, accurate layout hierarchy, frontend component structure, backend data modeling, and MVP discipline. By focusing on one profile page, the team can deliver a strong product clone without overbuilding messaging, jobs, notifications, feed algorithms, recruiter tools, or payments.

## **Market Opportunity**

* Microsoft reported that LinkedIn passed $10 billion in annual revenue for the first time in FY2021, showing that professional identity and career networking had become a major Microsoft business line.  
* Microsoft’s FY2025 annual report lists LinkedIn revenue at $14.989 billion in FY2023, $16.372 billion in FY2024, and $17.812 billion in FY2025.  
* Reuters reported in April 2026 that LinkedIn’s agentic AI hiring products were on track to generate $450 million in yearly revenue, reinforcing that LinkedIn’s structured profile and hiring data remain central to the business.

![][image1]

*Figure 1\. LinkedIn Revenue Growth Signals, FY2020-FY2026E. The corrected chart uses white labels with dark backgrounds for readability and moves “Fiscal year” below the year labels to prevent overlap.*

# **1b. USERS & NEEDS**

Primary user(s): Professionals, students, job seekers, technical learners, and creators who need a clean public profile that communicates their background, experience, education, skills, activity, and credibility.

Secondary users: Recruiters, hiring managers, collaborators, classmates, mentors, and peers who view the profile to understand the user’s professional identity quickly.

## **Key User Needs**

* As a professional user, I need to display my name, headline, location, profile photo, cover image, and contact actions because viewers should understand who I am immediately.  
* As a professional user, I need to show About, Activity, Featured, Experience, Education, Skills, and sidebar information because those sections create a complete professional identity page.  
* As a profile viewer, I need the page to look familiar and scan clearly because I may be reviewing multiple people and need to understand the profile quickly.  
* As a project team, we need to clone the LinkedIn profile page accurately because the assignment is focused on reproducing a real product page and demonstrating disciplined MVP execution.

# **2\. PROPOSED SOLUTION**

LinkedIn Profile Page Clone is a web app page that recreates the visible structure, layout, and user experience of a LinkedIn profile page. Users can view a professional profile with a cover banner, profile photo, name, headline, location, contact action, primary buttons, About, Featured, Activity, Experience, Education, Skills, and sidebar profile cards. The system will use mock profile data or seeded backend data to render the page in a realistic format. As a result, the team can demonstrate a working carbon-copy profile page clone without building LinkedIn’s full platform.

# **2a. VALUE PROPOSITION**

Professionals who struggle to present their career identity in one clean, credible format use the LinkedIn Profile Page Clone, a web profile page, to display their background, skills, activity, and experience in a familiar professional layout. Unlike a blank portfolio page or scattered resume links, it recreates the recognizable LinkedIn profile structure, helping viewers quickly understand the person’s professional identity.

# **2b. TOP 3 MVP VALUE PROPS**

**The Vitamin (must-have baseline):** The user can view a complete professional profile page with standard LinkedIn-style sections, including profile header, About, Featured, Activity, Experience, Education, Skills, and sidebar cards.

**The Painkiller (solves the core pain):** The clone organizes professional information into one familiar page so viewers do not have to search across different platforms, documents, or links to understand the user’s background.

**The Steroid (the magic moment):** The page creates the immediate “this looks like LinkedIn” recognition moment, making the demo feel real, polished, and product-ready.

# **2c. GOALS & NON-GOALS**

## **Goals**

* Recreate the core LinkedIn profile page layout as accurately as possible within MVP scope.  
* Give users a polished professional profile view that clearly presents identity, experience, education, skills, featured content, and activity.  
* Demonstrate clean component structure, reusable profile sections, and organized data rendering.  
* Build a realistic page that can be demoed without live LinkedIn integration or real user accounts.  
* Keep the project scoped to one strong product page instead of trying to clone the entire LinkedIn platform.

## **Non-Goals**

* Do not build LinkedIn’s full social network, feed algorithm, messaging system, job board, recruiter tools, advertising system, or premium payment system in the MVP.  
* Do not use real LinkedIn login, LinkedIn API integration, live LinkedIn data, or real connection requests.  
* Do not copy LinkedIn logos, protected brand assets, proprietary text, or private user data. The clone is for educational/product practice and focuses on page structure and user experience.

# **2d. SUCCESS METRICS**

| Goal | Signal | Metric | Target |
| :---- | :---- | :---- | :---- |
| Recreate the LinkedIn profile page layout | Profile page visually matches the expected LinkedIn profile structure | Required profile sections completed | 8 of 8 required sections completed |
| Present a complete professional identity | Viewer can understand identity quickly | Time to identify name, headline, location, and current role | Under 10 seconds |
| Demonstrate clean MVP execution | Core profile renders without broken sections | P0 requirements completed | 100% of P0 requirements completed |
| Support structured data rendering | Profile content is reusable and not only hardcoded into one flat block | Sections powered by structured data | At least 6 sections |
| Control scope | No full-platform features added before the profile page is complete | Out-of-scope features built before MVP completion | 0 out-of-scope features |

# **3\. REQUIREMENTS**

## **User Journey 1: Viewer opens a professional profile page**

Context: This journey matters because the main purpose of the MVP is to recreate the LinkedIn profile viewing experience. The viewer should immediately recognize the page structure and understand the profile owner’s identity, background, and credibility.

### **Sub-journey: Viewing the profile header**

* **\[P0\]** User can view a cover/banner image area at the top of the profile.  
* **\[P0\]** User can view a circular profile photo overlapping the cover area.  
* **\[P0\]** User can view the profile owner’s full name.  
* **\[P0\]** User can view the profile owner’s headline or professional title.  
* **\[P0\]** User can view the profile owner’s location.  
* **\[P0\]** User can view a contact info link or contact action.  
* **\[P0\]** User can view primary action buttons such as Connect, Message, and More.  
* **\[P1\]** User can view follower count, connection count, or profile relationship detail.  
* **\[P2\]** User can view a custom profile URL or badge.

### **Sub-journey: Viewing the About section**

* **\[P0\]** User can view an About section with a professional summary.  
* **\[P0\]** User can read a multi-sentence description of the profile owner’s background, interests, and goals.  
* **\[P1\]** User can expand or collapse longer About text.  
* **\[P2\]** User can view keywords or tags related to the profile owner’s focus areas.

### **Sub-journey: Viewing Featured content**

* **\[P0\]** User can view a Featured section with cards for portfolio items, projects, links, or media.  
* **\[P0\]** User can view title, short description, and image placeholder for each featured item.  
* **\[P1\]** User can click a featured item to open a detail view or external link placeholder.  
* **\[P2\]** User can view multiple featured items in a horizontal card layout.

### **Sub-journey: Viewing Activity**

* **\[P0\]** User can view an Activity section.  
* **\[P0\]** User can see mock recent posts, comments, or interactions.  
* **\[P1\]** User can see a “Show all activity” style link.  
* **\[P2\]** User can filter activity by posts, comments, or reactions.

### **Sub-journey: Viewing Experience**

* **\[P0\]** User can view an Experience section.  
* **\[P0\]** User can view at least two experience entries.  
* **\[P0\]** User can see company name, role title, dates, location, and description for each entry.  
* **\[P1\]** User can view company logo placeholders.  
* **\[P1\]** User can view bullets under each experience entry.  
* **\[P2\]** User can expand or collapse longer experience descriptions.

### **Sub-journey: Viewing Education**

* **\[P0\]** User can view an Education section.  
* **\[P0\]** User can view school name, degree/program, dates, and description.  
* **\[P1\]** User can view school logo placeholders.  
* **\[P2\]** User can view coursework, honors, or activities.

### **Sub-journey: Viewing Skills**

* **\[P0\]** User can view a Skills section.  
* **\[P0\]** User can view at least six skills.  
* **\[P1\]** User can view endorsement-style numbers or labels.  
* **\[P2\]** User can sort or group skills by category.

### **Sub-journey: Viewing sidebar content**

* **\[P0\]** User can view a right-side card with profile language, public profile, or profile settings-style information.  
* **\[P1\]** User can view “People also viewed” or “People you may know” style cards.  
* **\[P1\]** User can view small profile cards with name, headline, and action button.  
* **\[P2\]** User can dismiss or save suggested profiles.

## **User Journey 2: Profile owner’s data is rendered from structured information**

Context: This journey matters because the clone should not be a flat static image. Even if the data is mocked, the team should structure the data so the page can later support editing, database storage, or multiple profiles.

### **Sub-journey: Rendering profile data**

* **\[P0\]** User can view profile information rendered from structured mock data or seeded backend data.  
* **\[P0\]** User can view separate data objects for header, About, Featured, Activity, Experience, Education, Skills, and sidebar content.  
* **\[P0\]** User can refresh the page without losing visible profile data.  
* **\[P1\]** User can view loading or fallback states if profile data is missing.  
* **\[P2\]** User can switch between two mock profiles.

### **Sub-journey: Maintaining page structure**

* **\[P0\]** User can view the page on desktop without broken layout.  
* **\[P0\]** User can view the page with consistent spacing, section cards, borders, and typography.  
* **\[P1\]** User can view the page on tablet or smaller laptop widths without major layout breakage.  
* **\[P2\]** User can view a mobile-responsive stacked layout.

## **User Journey 3: Demo user presents the clone**

Context: This journey matters because the product will be evaluated as a Pursuit project. The team needs to explain what was cloned, what was scoped out, and why the MVP is focused on the profile page.

### **Sub-journey: Demoing the clone**

* **\[P0\]** User can open the profile page from a local or deployed URL.  
* **\[P0\]** User can explain that the MVP clones the LinkedIn profile page experience.  
* **\[P0\]** User can identify the profile header, About, Featured, Activity, Experience, Education, Skills, and sidebar sections.  
* **\[P0\]** User can explain what is mocked and what is functional.  
* **\[P1\]** User can show the underlying data structure or backend model.  
* **\[P2\]** User can show a second profile variation if time allows.

# **4\. APPENDIX**

## **A. Clone Scope**

This project is a carbon copy of the visible LinkedIn profile page experience for educational MVP purposes. The team is focused on reproducing the structure, page hierarchy, content sections, and profile-viewing experience of a LinkedIn profile page.

The MVP should include:

* Cover/banner area  
* Profile photo  
* Name  
* Headline  
* Location  
* Contact action  
* Connect/Message/More style actions  
* About section  
* Featured section  
* Activity section  
* Experience section  
* Education section  
* Skills section  
* Sidebar cards  
* Suggested profile cards  
* Mock or seeded data

## **B. Out-of-Scope LinkedIn Features**

* Real LinkedIn login  
* LinkedIn API integration  
* Real user accounts  
* Real connection requests  
* Real messaging  
* Real job applications  
* Real recruiter tools  
* Real notifications  
* Real feed algorithm  
* Real profile verification  
* Real payment or premium subscription processing

## **D. Technical Notes**

Frontend should be built with reusable components for each profile section.

Suggested component structure:

* ProfileHeader  
* AboutSection  
* FeaturedSection  
* ActivitySection  
* ExperienceSection  
* EducationSection  
* SkillsSection  
* SidebarCard  
* SuggestedProfileCardProfileActionButtons

Backend or data model should include separate objects or tables for:

* Profile  
* Experience  
* Education  
* Skills  
* Activity  
* FeaturedItems  
* SuggestedProfiles

## **E. MVP Discipline**

The priority is to complete one accurate LinkedIn-style profile page before expanding into additional features. Any feature that does not directly support the profile page clone should be deferred until after the core MVP is complete.

## **F. Sources**

* Pursuit PRD Template, 20260515 PRD Template.pdf.  
* GamerCard / GameCard Project Summary \- Pursuit L2.  
* Microsoft Annual Report 2020\.  
* Microsoft Annual Report 2021\.  
* Microsoft Annual Report 2022\.  
* Microsoft Annual Report 2025\.  
* LinkedIn Business Highlights from Microsoft FY21 Q4 Earnings.  
* Reuters, “LinkedIn’s AI hiring agents on track for $450 million in yearly revenue,” April 29, 2026\.

[image1]: <data:image/png;base64,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q/l27tzZfySEEEJKhVsTQgghhJCcwQBHSBlRPXB//OMfg7Y77rjDGzNmTDA+btw4/7FBgwZBWxhqeVdffXXB+NKlS/3Hc845x3986KGHvK222sofJoQQkn8Y4AgpI/ou1E6dOhlt+vjdd99d0K4j87zxxhvYHIDLlABHCCGkdmCAI6SMYLASBgwYUNADp+axzat49913C6YfeOCB/uOqVav8R1wGAxwhhNQW4VsIQkhV079/f2wihBBST2CAIySH7LXXXthECCGkHsEARwghhBCSMxjgCCGEEEJyBgMcIYQQQkjOYIAjhBBCCMkZDHCEEEIIITmDAY4QQgghJGcwwBFCCCGE5AwGOEIIIYSQnMEARwghhBCSMxjgCCGEEEJyBgMcIYQQQkjOYIAjhBBCCMkZDHCEEEIIITmDAY4QQgghJGcwwBFCCCGE5AwGOEIIIYSQnMEARwghhBCSMxjgCCGEEEJyBgMcIYQQQkjOYIAjhBBCCMkZDHCEEEIIITmDAY4QQgghJGcwwBFCCCGE5AxrgFtttV+aX3311V8mFEmHDh38Zfbs2dNr3rx50P7pp596F110UUHbU0895W2yySb+8LPPPuutscYawbRVq1Z5a6+9djCuUMtXKmTYtfwff/zRa9asmXfnnXcG84tXXHFFML8LeT954umnn8amUPr164dNBeB7X2eddQrG4yLfrzPOOMMfvvXWW72HHnqocIYSkO/OtGnTsLkkknyG+F0sBvyc00R9Nq7Xpn7/rnnKgf7bfv/99/3Hu+++23/s3Lmz99vf/jaYt127dsEw/v6F7bff3n+0rTOyQv9ex/2Oq/eZlDS+87vsskswjJ9h48aNg2Gd0047LRj+05/+pE3xvDXXXNN/VH+zUoj7+Qlp/W1tv+UkryMMWdbQoUOxOTXS+C7oJMkD5557rte2bVts9pFtto7t9y3jss1v06aNN3PmzGBe/fe96667ejfccEMw/swzzwS/b4X+d7J9H6K2dYo0/t5pY74b75dAJMgfTA3jm5fx5cuX+yvPL774wps1a5b3zjvvFMwj4B9rrbXW8ubOnVvQdumllxaM66jnveSSSwrGFbh820rZNT5+/PigTf9yCP/617+CacLkyZO9gw8+2B9WG1f1h5V5/v73v3uzZ8/29t13X7/t5JNP9r777jt/WLFgwYKCmrffftsfHjJk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>