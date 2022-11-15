const path = require("path");
const express = require("express");
const mongoSanitize = require("mongo-sanitize");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const cors = require("cors");

const router = express.Router();
const app = express();

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const userRouter = require("./routes/userRoutes");
const viewRouter = require("./routes/viewRoutes");
const specialRouter = require("./routes/specialRoutes");
const bookingRouter = require("./routes/bookingRoutes");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// 1) GLOBAL MIDDLEWARES
app.use(cors());

app.options("*", cors());
// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.use("/api", limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  //console.log(req.cookies);
  next();
});

// app.use(mongoSanitize());

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'", "data:", "blob:", "https:", "ws:"],
        baseUri: ["'self'"],
        fontSrc: ["'self'", "https:", "data:"],
        scriptSrc: [
          "'self'",
          "https:",
          "http:",
          "blob:",
          "https://*.mapbox.com",
          "https://js.stripe.com",
          "https://m.stripe.network",
          "https://*.cloudflare.com",
        ],
      },
    },
  })
);

const csp = require("express-csp");
csp.extend(app, {
  policy: {
    directives: {
      "default-src": ["self"],
      "style-src": ["self", "unsafe-inline", "https:"],
      "font-src": ["self", "https://fonts.gstatic.com"],
      "script-src": [
        "self",
        "unsafe-inline",
        "data",
        "blob",
        "https://js.stripe.com",
        "https://*.mapbox.com",
        "https://*.cloudflare.com/",
        "https://bundle.js:8828",
        "ws://localhost:56558/",
      ],
      "worker-src": [
        "self",
        "unsafe-inline",
        "data:",
        "blob:",
        "https://*.stripe.com",
        "https://*.mapbox.com",
        "https://*.cloudflare.com/",
        "https://bundle.js:*",
        "ws://localhost:*/",
      ],
      "frame-src": [
        "self",
        "unsafe-inline",
        "data:",
        "blob:",
        "https://*.stripe.com",
        "https://*.mapbox.com",
        "https://*.cloudflare.com/",
        "https://bundle.js:*",
        "ws://localhost:*/",
      ],
      "img-src": [
        "self",
        "unsafe-inline",
        "data:",
        "blob:",
        "https://*.stripe.com",
        "https://*.mapbox.com",
        "https://*.cloudflare.com/",
        "https://bundle.js:*",
        "ws://localhost:*/",
      ],
      "connect-src": [
        "self",
        "unsafe-inline",
        "data:",
        "blob:",
        // 'wss://<HEROKU-SUBDOMAIN>.herokuapp.com:<PORT>/',
        "https://*.stripe.com",
        "https://*.mapbox.com",
        "https://*.cloudflare.com/",
        "https://bundle.js:*",
        "ws://localhost:*/",
      ],
    },
  },
});

// 3) ROUTES
// app.use("/api/v1/home", router);
// app.use("/api/v1/login", router);

app.use("/", viewRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/exams", specialRouter);
app.use("/api/v1/bookings", bookingRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
