import "./app.js"; // inicializa toast + modal + eventos globais
import { initRouter, mountRoute } from "./router.js";

initRouter();
mountRoute("home");
