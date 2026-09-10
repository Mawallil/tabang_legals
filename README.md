# Tabang Legal & Regulatory Compliance Portal

This repository hosts the official public legal compliance documentation, privacy disclosures, terms of service, and data deletion request portal for the **Tabang Emergency Response Mobile Application** (Google Play Store & Apple App Store).

Deployed specifically under the regulatory framework of the **Republic of the Philippines**, including **Republic Act No. 10173 (Data Privacy Act of 2012)**.

---

## 🌐 Live GitHub Pages URLs (After Enabling Pages)

Once you enable **GitHub Pages** under `Settings > Pages` (Deploy from branch: `main`, folder: `/root`):

| Document | Purpose & Store Console Field | URL |
| :--- | :--- | :--- |
| **Legal Hub (Overview)** | General Landing & Compliance Repository | `https://mawallil.github.io/tabang_legals/` |
| **Privacy Policy** | **Google Play Console:** `Policy and programs > Privacy policy`<br>**App Store Connect:** `App Information > Privacy Policy URL` | `https://mawallil.github.io/tabang_legals/privacy.html` |
| **Terms of Service (EULA)** | **App Store Connect:** `App Information > Terms of Use / EULA`<br>In-App Legal Links | `https://mawallil.github.io/tabang_legals/terms.html` |
| **Account & Data Deletion Request** | **Google Play Console:** `Data safety > Account deletion URL`<br>Fulfills Google Play & Apple App Store requirements | `https://mawallil.github.io/tabang_legals/deletion.html` |

---

## 🚀 How to Enable GitHub Pages (1-Minute Setup)

1. Open this repository on GitHub: [github.com/Mawallil/tabang_legals](https://github.com/Mawallil/tabang_legals).
2. Click **Settings** (top right tab).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment > Source**, select:
   * **Source:** `Deploy from a branch`
   * **Branch:** `main`
   * **Folder:** `/ (root)`
5. Click **Save**.
6. GitHub will build and publish the site in ~30 seconds at:
   `https://mawallil.github.io/tabang_legals/`

---

## 📱 Google Play Console Review Notes Guide

When submitting your application to Google Play, use these settings in the declarations to avoid rejections:

### 1. Government Apps Declaration
* **Question:** Is your app developed by or on behalf of a government entity?
* **Answer:** Select **No** (unless you have a signed, sealed MOA from an LGU to upload).
* **In the Store Listing Description:** Always keep the disclaimer:
  > *"Disclaimer: Tabang is an independent emergency response technology platform developed for pilot evaluations and local disaster resilience research. It is not affiliated with the Philippine National Government or Emergency 911. In life-threatening emergencies, please dial 911 directly."*

### 2. Data Safety Form - Account Deletion
* **Question:** Does your app allow users to create an account?
  * **Answer:** Yes
* **Question:** Do you provide a link for users to request that their account and data be deleted?
  * **Answer:** Yes
* **URL:** `https://mawallil.github.io/tabang_legals/deletion.html`

### 3. App Reviewer Demo Credentials
In **App Access** (Google Play Console) and **App Review Notes** (App Store Connect), provide:
* **Username:** `demo`
* **Password:** `aicob123`
* **Security PIN:** `123456`
* This allows store reviewers to test the app without having to be enrolled at an in-person Windows LGU terminal.

---

## 📂 Repository Contents

```text
├── index.html        # Central legal portal & pilot overview
├── privacy.html      # Comprehensive Privacy Policy under RA 10173
├── terms.html        # Terms of Service, EULA & PD 1727 Anti-Hoax notice
├── deletion.html     # Interactive Data Deletion request portal
├── styles.css        # Tabang tactical dark theme styling
├── script.js         # Interactive form logic & mailto submission fallback
└── assets/
    ├── logo_bb.png   # Tabang logo for black backgrounds
    └── logo_bb_small.png
```

---

&copy; 2026 Tabang Emergency Response. All Rights Reserved.
