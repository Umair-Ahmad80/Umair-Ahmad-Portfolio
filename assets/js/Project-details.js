document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("project") || "InstituteManagement";

    const projects = {

        InstituteManagement: {
            title: "Institute Management System",

            description:
                "A complete web-based management solution designed to simplify institute operations, student management, attendance, tasks and communication.",

            type: "Web Application",
            architecture: "MVC Architecture",
            role: "Full Stack Developer",
            database: "SQL Server",

            technologies: [
                "ASP.NET MVC",
                "C#",
                "SQL",
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap"
            ],

            images: [
                {
                    src: "assets/img/portfolio/InstitueManagementLanding.png",
                    title: "Institue Management Landing",
                    alt: "InstitueManagementLanding"
                },
                {
                    src: "assets/img/portfolio/InstituteLoginPage.png",
                    title: "Institute - Login",
                    alt: "InstitueManagementLanding"
                },
                {
                    src: "assets/img/portfolio/InstituteAdminDashboard.png",
                    title: "Institute Admin Dashboard",
                    alt: "InstituteAdminDashboard"
                },
                {
                    src: "assets/img/portfolio/InstituteMentorDashboard.png",
                    title: "Institute Mentor Dashboard",
                    alt: "InstituteMentorDashboard"
                },
                {
                    src: "assets/img/portfolio/InstituteStudentDashboard.png",
                    title: "Institute Student Dashboard",
                    alt: "InstituteStudentDashboard"
                }
            ],

            overview: [
                "The Institute Management System is a web-based application developed to manage day-to-day activities of an educational institute. The system provides a centralized platform for managing students, mentors, batches, attendance, tasks, notices and other institute-related activities.",

                "The application helps reduce manual work and provides role-based access so that administrators, mentors and students can access the features relevant to their responsibilities."
            ],

            features: [
                {
                    icon: "bi bi-people",
                    title: "Student Management",
                    description:
                        "Manage student records, registration and related information efficiently."
                },
                {
                    icon: "bi bi-diagram-3",
                    title: "Batch Management",
                    description:
                        "Create batches and assign students and mentors according to requirements."
                },
                {
                    icon: "bi bi-calendar-check",
                    title: "Attendance Management",
                    description:
                        "Manage and maintain batch-wise student attendance records."
                },
                {
                    icon: "bi bi-list-task",
                    title: "Task Management",
                    description:
                        "Assign tasks, manage submissions and track student performance."
                },
                {
                    icon: "bi bi-shield-lock",
                    title: "Role Based Access",
                    description:
                        "Secure access for administrators, mentors and students."
                },
                {
                    icon: "bi bi-envelope",
                    title: "Email Notifications",
                    description:
                        "Automated email notifications for important registration and system activities."
                }
            ],

            liveDemo: "#"
        },


       EyeHospital: {
            title: "Eye Hospital Management System",

            description:
                "A web-based eye hospital management system designed to streamline hospital operations and efficiently manage patients, doctors, receptionists, optometrists, appointments, prescriptions, billing and notifications.",

            type: "Web Application",
            architecture: "MVC Architecture",
            role: "Full Stack Developer",
            database: "SQL Server",

            technologies: [
                "ASP.NET MVC",
                "C#",
                "SQL Server",
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "Visual Studio"
            ],

            images: [
                {
                    src: "assets/img/portfolio/EyeHospitalCardImage.png",
                    title: "Eye Hospital - Login ",
                    alt: "EyeHospitalLogin"
                },
                {
                    src: "assets/img/portfolio/HospitalAdminDashboard.png",
                    title: "Eye Hospital Admin Dashboard",
                    alt: "EyeHospitalAdminDashboard"
                },
                {
                    src: "assets/img/portfolio/HospitalDrDashboard.png",
                    title: "Eye Hospital Doctor Dashboard",
                    alt: "EyeHospitalDoctorDashboard"
                },
                {
                    src: "assets/img/portfolio/HospitalOptopDashboard.png",
                    title: "Eye Hospital Optometris Dashboard",
                    alt: "HospitalOptopDashboard"
                },
                {
                    src: "assets/img/portfolio/HospitalReceptionDashboard.png",
                    title: "Eye Hospital Receptionist Dashboard",
                    alt: "HospitalReceptionDashboard"
                }
            ],

            overview: [
                "The Eye Hospital Management System is a web-based application developed to efficiently manage the day-to-day operations of an eye hospital through dedicated modules for Admin, Doctor, Receptionist and Optometrist.",

                "The system provides role-based access control and streamlines patient registration, appointments, prescriptions, billing, staff management, notices and notifications. It also generates credentials and patient case numbers automatically, improving operational efficiency and patient management."
            ],

            features: [
                {
                    icon: "bi bi-shield-lock",
                    title: "Role-Based Access Control",
                    description:
                        "Provides secure access to Admin, Doctor, Receptionist and Optometrist modules based on user roles and permissions."
                },
                {
                    icon: "bi bi-people",
                    title: "Staff & Doctor Management",
                    description:
                        "Admin can manage staff and doctors, perform CRUD operations and generate user credentials automatically."
                },
                {
                    icon: "bi bi-person-vcard",
                    title: "Patient Registration",
                    description:
                        "Receptionists can register patients and the system automatically generates unique patient case numbers."
                },
                {
                    icon: "bi bi-calendar-check",
                    title: "Appointment Management",
                    description:
                        "Receptionists can efficiently manage patient appointments and related scheduling information."
                },
                {
                    icon: "bi bi-prescription2",
                    title: "Prescription Management",
                    description:
                        "Doctors can view and continue patient prescriptions while optometrists can add and manage prescription information."
                },
                {
                    icon: "bi bi-receipt",
                    title: "Billing Management",
                    description:
                        "Receptionists can manage patient billing and maintain billing-related records efficiently."
                },
                {
                    icon: "bi bi-key",
                    title: "Auto-Generated Credentials",
                    description:
                        "The system automatically generates login credentials for staff and doctors to simplify account creation."
                },
                {
                    icon: "bi bi-megaphone",
                    title: "Notice Management",
                    description:
                        "Admin can create and manage notices and communicate important information to hospital users."
                },
                {
                    icon: "bi bi-bell",
                    title: "Notifications",
                    description:
                        "Provides print and email notification functionality to improve communication and hospital operations."
                }
            ],

            liveDemo: "#"
        },


        LaptopServices: {
            title: "Laptop Service Management System",

            description:
                "A web-based laptop service management system designed to manage customer registration, service requests, repair tracking, billing, technicians, reports and inventory efficiently.",

            type: "Web Application",
            architecture: "MVC Architecture",
            role: "Full Stack Developer",
            database: "SQL Server",

            technologies: [
                "ASP.NET MVC",
                "C#",
                "SQL Server",
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "Visual Studio"
            ],

            images: [
                {
                    src: "assets/img/portfolio/LaptopServiceLanding.png",
                    title: "Laptop Service Management System",
                    alt: "Laptop Service Management System"
                },
                {
                    src: "assets/img/portfolio/LaptopServicesCustomerRegistrationPage.png",
                    title: "Laptop Services Customer Registration",
                    alt: "LaptopServicesCustomerRegistrationPage"
                },
                {
                    src: "assets/img/portfolio/LaptopServicesLogin.png",
                    title: "Laptop Services - Login",
                    alt: "LaptopServicesLogin"
                },
                {
                    src: "assets/img/portfolio/LaptopServicesAdminDashboard.png",
                    title: "Laptop Services Admin Dashboard",
                    alt: "LaptopServicesAdminDashboard"
                },
                {
                    src: "assets/img/portfolio/LaptopServicesTechnicianDashboard.png",
                    title: "Laptop Services Technician Dashboard",
                    alt: "LaptopServicesTechnicianDashboard"
                },
                {
                    src: "assets/img/portfolio/LaptopSevicesCustomerHomepage.png",
                    title: "Laptop Sevices Customer Home",
                    alt: "LaptopSevicesCustomerHomepage"
                }

               
            ],

            overview: [
                "The Laptop Service Management System is a web-based application developed to manage laptop repair and service center operations, including customer registration, service requests, repair tracking, billing and technician activities.",

                "Customers can create accounts, receive automatically generated tracking IDs through email, submit service requests and track repair status online. Admin can manage customers, requests, technicians and services, while technicians can update service progress, generate reports and close service requests."
            ],

            features: [
                {
                    icon: "bi bi-shield-lock",
                    title: "Role-Based Access Control",
                    description:
                        "Provides secure access and functionality based on different user roles within the service management system."
                },
                {
                    icon: "bi bi-person-plus",
                    title: "Customer Registration",
                    description:
                        "Customers can create accounts and maintain their personal and service-related information."
                },
                {
                    icon: "bi bi-ticket-perforated",
                    title: "Automatic Tracking ID",
                    description:
                        "The system automatically generates unique tracking IDs for service requests and sends them to customers through email."
                },
                {
                    icon: "bi bi-tools",
                    title: "Service Request Management",
                    description:
                        "Customers can create service requests while Admin manages request approval and service-related operations."
                },
                {
                    icon: "bi bi-search",
                    title: "Online Service Tracking",
                    description:
                        "Customers can track their laptop repair and service status online using their unique tracking ID."
                },
                {
                    icon: "bi bi-person-gear",
                    title: "Technician Management",
                    description:
                        "Admin can manage technicians, while technicians can update service progress and close completed requests."
                },
                {
                    icon: "bi bi-receipt",
                    title: "Billing & Invoice",
                    description:
                        "The system manages service billing and allows customers to download invoices using their tracking ID."
                },
                {
                    icon: "bi bi-envelope",
                    title: "Email Notifications",
                    description:
                        "Automated email notifications are used to communicate service-related information and tracking details to customers."
                },
                {
                    icon: "bi bi-file-earmark-bar-graph",
                    title: "Reports",
                    description:
                        "Technicians can generate service reports and maintain information about completed and ongoing service requests."
                },
                {
                    icon: "bi bi-box-seam",
                    title: "Inventory Management",
                    description:
                        "Helps manage inventory and maintain records of items required for laptop servicing and repair operations."
                },
                {
                    icon: "bi bi-database",
                    title: "CRUD Operations",
                    description:
                        "Admin can manage customers, service requests, technicians and services using standard CRUD operations."
                }
            ],

            liveDemo: "#"
        },


        CourierBooking: {
            title: "Courier Booking System",

            description:
                "A web-based courier booking application designed to manage courier bookings, customer details, delivery information and booking records.",

            type: "Web Application",
            architecture: "MVC Architecture",
            role: "Full Stack Developer",
            database: "SQL Server",

            technologies: [
                "ASP.NET MVC",
                "C#",
                "SQL Server",
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap"
            ],

            images: [
                {
                    src: "assets/img/portfolio/courier-booking.png",
                    title: "Courier Booking System",
                    alt: "Courier Booking System"
                },
                 {
                    src: "assets/img/portfolio/CourierBookingLoginPage.png",
                    title: "Courier Booking - Login",
                    alt: "Login Screen"
                },
                {
                    src: "assets/img/portfolio/AdminBranchPage.png",
                    title: "Admin Branch",
                    alt: "Admin Branch"
                },
                {
                    src: "assets/img/portfolio/ChargesPage.png",
                    title: "Set Courier Charges",
                    alt: "Set Courier Charges"
                },
                {
                    src: "assets/img/portfolio/CourierBookingPage.png",
                    title: "Courier Booking",
                    alt: "Courier BookingPage"
                },
                {
                    src: "assets/img/portfolio/BranchInBound.png",
                    title: "Create Branch InBound",
                    alt: "Branch InBound"
                }
            ],

            overview: [
                "The Courier Booking System is a web-based application developed to simplify courier booking and management operations.",

                "The system provides a centralized platform for managing customer details, courier bookings, delivery information and booking records."
            ],

            features: [
                {
                    icon: "bi bi-box-seam",
                    title: "Courier Booking",
                    description:
                        "Create and manage courier booking records efficiently."
                },
                {
                    icon: "bi bi-person",
                    title: "Customer Management",
                    description:
                        "Manage customer details and courier-related information."
                },
                {
                    icon: "bi bi-geo-alt",
                    title: "Delivery Management",
                    description:
                        "Maintain sender, receiver and delivery-related information."
                },
                {
                    icon: "bi bi-database",
                    title: "Booking Records",
                    description:
                        "Maintain and manage courier booking history."
                }
            ],

            liveDemo: "#"
        }

    };


    // Check project exists
    const project = projects[projectId];

    if (!project) {
        console.error("Project not found:", projectId);
        return;
    }


    // ==========================================
    // PROJECT HEADER
    // ==========================================

    const titleElement = document.querySelector(".project-details-header h2");

    if (titleElement) {
        titleElement.textContent = project.title;
    }


    const descriptionElement =
        document.querySelector(".project-details-header p");

    if (descriptionElement) {
        descriptionElement.textContent = project.description;
    }


    // ==========================================
    // PROJECT INFORMATION
    // ==========================================

    const infoItems = document.querySelectorAll(".project-info-item");

    infoItems.forEach(function (item) {

        const label = item.querySelector("span");
        const value = item.querySelector("strong");

        if (!label || !value) return;

        const labelText = label.textContent.trim().toLowerCase();

        if (labelText === "project type") {
            value.textContent = project.type;
        }

        if (labelText === "architecture") {
            value.textContent = project.architecture;
        }

        if (labelText === "role") {
            value.textContent = project.role;
        }

        if (labelText === "database") {
            value.textContent = project.database;
        }

    });


    // ==========================================
    // TECHNOLOGIES
    // ==========================================

    const technologyList =
        document.querySelector(".technology-list");

    if (technologyList) {

        technologyList.innerHTML = "";

        project.technologies.forEach(function (technology) {

            const span = document.createElement("span");

            span.textContent = technology;

            technologyList.appendChild(span);

        });

    }


    // ==========================================
    // LIVE DEMO BUTTONS
    // ==========================================

    const liveButtons =
        document.querySelectorAll(
            ".project-live-btn, .project-card-demo"
        );

    liveButtons.forEach(function (button) {

        button.href = project.liveDemo;

    });


    // ==========================================
    // PROJECT GALLERY
    // ==========================================

    const galleryMain =
      document.querySelector("#project-gallery-main");
    const galleryThumbs =
     document.querySelector("#project-gallery-thumbs");


    if (galleryMain && galleryThumbs && project.images.length > 0) {

        // Main image
        const firstImage = project.images[0];

        galleryMain.innerHTML = `
            <a href="${firstImage.src}"
               class="glightbox"
               data-gallery="project-gallery"
               data-title="${firstImage.title}">

                <img
                    src="${firstImage.src}"
                    alt="${firstImage.alt}">
            </a>
        `;


        // Thumbnails
        galleryThumbs.innerHTML = "";

        project.images.forEach(function (image) {

            galleryThumbs.innerHTML += `
                <a href="${image.src}"
                   class="glightbox"
                   data-gallery="project-gallery"
                   data-title="${image.title}">

                    <img
                        src="${image.src}"
                        alt="${image.alt}">
                </a>
            `;

        });

    }


    // ==========================================
    // PROJECT OVERVIEW
    // ==========================================

    const overviewSection =
        document.querySelector(".project-overview");

    if (overviewSection) {

        const paragraphs =
            overviewSection.querySelectorAll("p");

        paragraphs.forEach(function (paragraph, index) {

            if (project.overview[index]) {
                paragraph.textContent = project.overview[index];
            }

        });

    }


    // ==========================================
    // KEY FEATURES
    // ==========================================

    const featuresContainer =
       document.querySelector("#project-features");

    if (featuresContainer) {

        featuresContainer.innerHTML = "";

        project.features.forEach(function (feature) {

            featuresContainer.innerHTML += `

                <div class="col-md-6">

                    <div class="feature-box">

                        <i class="${feature.icon}"></i>

                        <div>

                            <h4>${feature.title}</h4>

                            <p>
                                ${feature.description}
                            </p>

                        </div>

                    </div>

                </div>

            `;

        });

    }


    // ==========================================
    // INITIALIZE GLIGHTBOX
    // ==========================================

    if (typeof GLightbox !== "undefined") {

        GLightbox({
            selector: ".glightbox"
        });

    }

});