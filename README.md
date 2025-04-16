# 🛍️ Angular 19 Standalone Product Management App

This is a **practice Angular 19 application** using **standalone components**, **Material UI**, **Reactive Forms**, and **TypeScript best practices**. It provides a simple **CRUD** interface for managing products, including **form validation**, **edit/update functionality**, and **toastr notifications**.

---

## 🚀 Features

- ✅ Built using **Angular 19 standalone components**
- ✅ Uses **Reactive Forms** with validation
- ✅ Material UI (Angular Material) for clean UX
- ✅ Bootstrap styling integration
- ✅ `ngx-toastr` for success/error notifications
- ✅ Modular, scalable architecture
- ✅ No NgModules — purely standalone

---

## 📂 Project Structure

```bash
src/
├── app/
│   ├── app.component.ts
│   ├── app.component.html
│   ├── data/
│   │   ├── mock-products.ts                # Mock data
│   ├── features/  
│   │   ├── product/ 
│   │   │   ├── models/
│   │   │   │   ├── product.model.ts        
│   │   │   ├── pages/
│   │   │   │   ├── product/
│   │   │   │   │   ├── product.component.html        
│   │   │   │   │   ├── product-form.component.ts     # Parent: Product list
│   │   │   │   ├── product-form/
│   │   │   │   │   ├── product-form.component.html       
│   │   │   │   │   ├── product-form.component.ts     # Child: Reactive Form
│   │   │   ├── services/
│   │   │   │   └── product.service.ts          # In-memory CRUD logic
├── index.html/
├── main.ts                             # Bootstrap with standalone APIs
└── styles.css                          # Global + Bootstrap styles


## 🧑‍💻 Technologies Used

| Technology              | Description                                     |
|-------------------------|-------------------------------------------------|
| **Angular 19**           | Frontend framework (with standalone components) |
| **Angular Material**     | UI component library                           |
| **Bootstrap 5**          | Layout and utility styling                     |
| **Reactive Forms**       | Form handling and validation                   |
| **ngx-toastr**           | Toast notifications for success/error messages |
| **TypeScript**           | Static typing and modern JS features           |
| **ESBuild (via Angular CLI)** | Fast build and bundling                  |

---

## 🛠️ Installation & Setup

### Prerequisites

Make sure you have the following tools installed:
- **Node.js**: [Install Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js

### Steps

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <project_directory>

**🛠️ Setup Instructions**
1. Clone the repo
git clone https://github.com/your-username/product-app-angular19.git
cd product-app-angular19

2. Install dependencies
npm install

3. Run the app
npm start

4. Visit: http://localhost:4200

---

**📸 UI Preview**

![image](https://github.com/user-attachments/assets/679d1176-099c-4d1e-b0a2-9ff4381c6536)

---

**🧪 Planned Enhancements**

Add unit tests using Jest
Add filtering/searching
Integrate with backend (Node.js)
Use signals for state management (Angular 17+)
Add authentication

---

**🧠 Learnings**

- Standalone components streamline Angular dev
- inject() simplifies service consumption
- Angular Material + Bootstrap can coexist well
- Toasts enhance user experience in CRUD
- Observable, RxJs

---

**📌 Important Notes**

The project uses inject() instead of constructor DI for services
Make sure @angular/animations is installed if using ngx-toastr
Style conflicts between Bootstrap and Material can be managed via utility classes (mat-elevation, margins, etc.)

---

**📃 License**
This project is for learning purposes only.

---

Happy Coding! 🎯
