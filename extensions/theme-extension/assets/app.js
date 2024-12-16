const hourData = [
  { id: 1, time: "10:00 am" },
  { id: 2, time: "11:00 am" },
  { id: 3, time: "12:00 pm" },
  { id: 4, time: "1:00 pm" },
  { id: 5, time: "2:00 pm" },
  { id: 6, time: "3:00 pm" },
];

const halfHourData = [
  { id: 1, time: "10:00 am" },
  { id: 2, time: "10:30 am" },
  { id: 3, time: "11:00 am" },
  { id: 4, time: "11:30 am" },
  { id: 5, time: "12:00 pm" },
  { id: 6, time: "12:30 pm" },
  { id: 7, time: "1:00 pm" },
  { id: 8, time: "1:30 pm" },
  { id: 9, time: "2:00 pm" },
  { id: 10, time: "2:30 pm" },
  { id: 11, time: "3:00 pm" },
];

/***************************** CONFIGURATIONS *****************************/
// API Base URL (update this for different environments)
const API_BASE_URL = "http://localhost:3333/api/v1/consultation";

/***************************** ELEMENTS *****************************/
// Grabbing relevant DOM elements for interaction and validation.
const elements = {
  noteInput: document.querySelector(".as_checkout_textarea"),
  summaryTitle: document.querySelector(".as_checkout_consult_time"),
  summaryPrice: document.querySelector(".as_checkout_price"),
  formElement: document.querySelector("#as-consultation-extension"),
  dropdowns: document.querySelectorAll("#as-dropdown"),
  productContainer: document.querySelector("#as-product-container"),
  timeContainer: document.querySelector("#as-consultation-time-container"),
  calendarContainer: document.querySelector("#calendar-container"),
  errors: {
    note: document.querySelector("#as-note-error"),
    date: document.querySelector("#as-date-error"),
    time: document.querySelector("#as-time-error"),
  },
};

/***************************** DEFAULT VALUES *****************************/
// Set the default date to tomorrow for booking.
const defaultDate = new Date();
defaultDate.setDate(defaultDate.getDate() + 1);

/***************************** CONSULTATION EXTENSION *****************************/
const ConsultationExtension = {
  order: {
    productId: null,
    note: "",
    date: defaultDate.toISOString().split("T")[0],
    time: null,
  },
  products: window?.selectedProducts || [],
  consultationApiData: null,

  /***************************** INITIALIZER *****************************/
  async init() {
    console.log("Initializing Consultation Extension...");
    this.showLoader();
    await this.fetchBookedTimes(this.order.date);
    this.insertFlatpickrScript(() => {
      this.initializeFlatpickr();
    });
    this.hideErrors();
    this.setupDropdowns();
    this.populateProducts();
    this.setupFormSubmission();
    this.hideLoader();
  },

  /***************************** API FUNCTIONS *****************************/
  async fetchBookedTimes(date) {
    try {
      this.showLoader()
      const response = await fetch(`${API_BASE_URL}?date=${date}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        if (data.code === 200) {
          this.consultationApiData = await data.result?.map((t) => t.time) || [];
          this.updateTimeSlots();

        } else if (data.code === 404) {
          this.consultationApiData = [];
          this.updateTimeSlots();
        }
      } else {
        console.error("Failed to fetch booked times:", response?.status);
        this.consultationApiData = [];
      }
    } catch (err) {
      console.error("Error fetching booked times:");
      this.consultationApiData = [];
    } finally {
      this.hideLoader()
    }
  },

  /***************************** UI FUNCTIONS *****************************/
  showLoader() {
    elements.formElement?.classList.add("loading");
  },

  hideLoader() {
    elements.formElement?.classList.remove("loading");
  },

  hideErrors() {
    Object.values(elements.errors).forEach((error) => (error.style.display = "none"));
  },

  toggleError(element, show, message = "") {
    element.style.display = show ? "block" : "none";
    element.innerHTML = show ? message : "";
  },

  setupDropdowns() {
    elements.dropdowns.forEach((dropdown) => {
      const head = dropdown.querySelector(".as-dropdown-head");
      const body = dropdown.querySelector(".as-dropdown-body");
      const icon = head.querySelector(".as-dropdown-icon");

      if (head && body) {
        head.addEventListener("click", () => {
          body.classList.toggle("active")
          icon.classList.toggle("active")
        });
      }
    });
  },

  populateProducts() {
    if (!elements.productContainer || !this.products.length) {
      elements.productContainer.innerHTML = "<p>No products available.</p>";
      return;
    }

    elements.productContainer.innerHTML = this.products
      .map(
        (product, index) => `
        <label class="as-product-wrapper ${index === 0 ? "active" : ""}">
          <p class="as-product-name">${product.title}</p>
          <p class="as-product-price">$${`${product.price / 100}.00`}</p>
          <input type="radio" name="consultationDuration" hidden value="${product.id}" data-product="${product.title}" ${index === 0 ? "checked" : ""}>
        </label>`
      )
      .join("");

    this.order.productId = this.products[0].id;
    elements.summaryTitle.textContent = this.products[0].title;
    elements.summaryPrice.textContent = `$${`${this.products[0].price / 100}.00`}`;
    this.updateTimeSlots();

    elements.productContainer.querySelectorAll(".as-product-wrapper").forEach((wrapper) => {
      wrapper.addEventListener("click", () => {
        elements.productContainer
          .querySelectorAll(".as-product-wrapper")
          .forEach((w) => w.classList.remove("active"));
        wrapper.classList.add("active");
        const input = wrapper.querySelector("input[type='radio']");
        if (input) {
          input.checked = true;
          this.order.productId = parseInt(input.value, 10);
          elements.summaryTitle.textContent = input.dataset.product;
          this.updateTimeSlots();
        }
      });
    });
  },

  updateTimeSlots() {
    const findProduct = this.products?.find((p) => p.id === this.order.productId)
    const timeSlots = findProduct?.title.includes("30") ? halfHourData : hourData;
    if (!elements.timeContainer) return;

    elements.timeContainer.innerHTML = timeSlots
      .map(({ time }) => {
        const isBooked = this.consultationApiData.includes(time);
        return `
        <label class="as-consultation-time ${isBooked ? "disable" : ""}">
          <input type="radio" name="timeslot" value="${time}" ${isBooked ? "disabled" : ""}>
          <small>${time}</small>
        </label>`;
      })
      .join("");

    elements.timeContainer.querySelectorAll(".as-consultation-time").forEach((label) => {
      label.addEventListener("click", () => {
        elements.timeContainer.querySelectorAll(".as-consultation-time").forEach((l) => l.classList.remove("active"));
        label.classList.add("active");
        const input = label.querySelector("input[type='radio']");
        if (input) {
          this.order.time = input.value;
          this.toggleError(elements.errors.time, false);
        }
      });
    });
  },

  insertFlatpickrScript(callback) {
    if (typeof flatpickr === "undefined") {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/flatpickr";
      script.onload = callback;
      document.head.appendChild(script);
    } else {
      callback();
    }
  },

  initializeFlatpickr() {
    flatpickr(elements.calendarContainer, {
      inline: true,
      static: true,
      minDate: new Date().fp_incr(1),
      defaultDate: defaultDate,
      onChange: async (_, dateStr) => {
        this.order.date = dateStr;
        await this.fetchBookedTimes(dateStr);
        this.toggleError(elements.errors.date, false);
      },
    });
  },

  setupFormSubmission() {
    elements.noteInput?.addEventListener("input", (e) => {
      this.order.note = e.target.value;
      this.toggleError(elements.errors.note, false);
    });

    elements.formElement?.addEventListener("submit", (e) => {
      e.preventDefault();
      const { note, date, time } = this.order;
      this.toggleError(elements.errors.note, !note, "Note is required.");
      this.toggleError(elements.errors.date, !date, "Please select a date.");
      this.toggleError(elements.errors.time, !time, "Please select a time.");
      if (note && date && time) {
        this.addToCart();
      }
    });
  },

  /***************************** CHECKOUT *****************************/
  addToCart() {
    const { productId, note, date, time } = this.order;
    fetch("cart/add.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [{ id: productId, quantity: 1 }],
        note,
        attributes: { date, time, type: "Subscription" },
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Product added to cart successfully!");
        } else {
          console.error("Failed to add product to cart:", response.statusText);
        }
      })
      .catch((err) => console.error("Error adding product to cart:", err));
  },
};

/***************************** INITIALIZE *****************************/
ConsultationExtension.init();
