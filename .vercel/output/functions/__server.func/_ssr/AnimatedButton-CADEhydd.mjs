import { _ as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as motion } from "../_libs/framer-motion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AnimatedButton-CADEhydd.js
var import_jsx_runtime = require_jsx_runtime();
var AnimatedButton = ({ classes, func, children }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		whileTap: { scale: .95 },
		onClick: func,
		className: classes,
		children
	});
};
//#endregion
export { AnimatedButton as t };
