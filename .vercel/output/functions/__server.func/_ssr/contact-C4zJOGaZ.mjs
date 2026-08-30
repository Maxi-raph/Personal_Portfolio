import { r as __toESM } from "../_runtime.mjs";
import { I as require_react, _ as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, o as Mail, r as Send } from "../_libs/lucide-react.mjs";
import { d as FaGithub, f as FaLinkedin, m as FaTwitter } from "../_libs/react-icons.mjs";
import { i as useNav } from "./router-CfvuSJSL.mjs";
import { t as AnimatedButton } from "./AnimatedButton-CADEhydd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C4zJOGaZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	const { isOpen, setIsOpen } = useNav();
	const selectRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (selectRef.current) selectRef.current.selectedIndex = 0;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `md:hidden ${isOpen && "absolute z-20 inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-auto"}`,
		onClick: () => setIsOpen(false)
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-wrap mt-34",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row justify-between gap-6 md:gap-2 lg:gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "md:w-[20%] text-accent-text text-[11px] block mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block mr-2",
							children: "//"
						}), "CONTACT"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl lg:text-5xl text-text-primary font-extrabold md:max-w-md lg:max-w-xl mb-6 md:leading-13 lg:leading-16",
						children: "Let's build something worth remembering."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-text-secondary sm:w-140 md:w-120 lg:w-130 leading-relaxed",
						children: "Whether you have a project in mind, want to collaborate, or just want to talk about frontend engineering — my inbox is open. I typically respond within 24 hours."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:pt-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-surface-elevated inline-flex justify-center items-center gap-2 py-2 px-3 md:py-3 md:px-5 rounded-2xl border border-text-muted shadow-shadow-medium shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block w-3 h-3 rounded-full bg-success" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs md:text-sm text-text-primary font-semibold",
							children: "Available for new projects"
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-18 mb-18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col lg:flex-row gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 lg:w-[70%]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-text-primary text-xl font-bold",
							children: "Send a message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							action: "",
							onSubmit: () => null,
							className: "flex flex-col gap-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col md:flex-row gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-1 flex-col gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "name",
											className: "text-text-muted text-[11px] font-semibold",
											children: "Your name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											id: "name",
											className: "bg-surface-elevated border border-text-muted py-2 px-6 outline-0 focus:ring focus:ring-accent-hover\n                                 h-11 rounded-xl text-md text-text-primary font-normal placeholder:text-text-muted placeholder:font-normal",
											placeholder: "e.g  Raphael  Onwujekwe"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-1 flex-col gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "email",
											className: "text-text-muted text-[11px] font-semibold",
											children: "Email address"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											id: "email",
											className: "bg-surface-elevated border border-text-muted py-2 px-6 outline-0 focus:ring focus:ring-accent-hover\n                                 h-11 rounded-xl text-md text-text-primary font-normal placeholder:text-text-muted placeholder:font-normal",
											placeholder: "e.g  chibuzor@gmail.com"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "subject",
										className: "text-text-muted text-[11px] font-semibold",
										children: "Subject"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "\n                                bg-surface-elevated border border-text-muted \n                                outline-0 focus:ring focus:ring-accent-hover\n                                h-11 rounded-xl text-md text-text-primary font-normal",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											name: "subject",
											ref: selectRef,
											id: "subject",
											className: "w-full h-full cursor-pointer rounded-xl bg-surface-elevated outline-none",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													disabled: true,
													className: "text-text-muted!",
													children: "Select subject..."
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "contract-work",
													children: "Contract Work"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "project-inquiry",
													children: "Project Inquiry"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "collaboration",
													children: "Collaboration"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "other",
													children: "Other"
												})
											]
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "message",
										className: "text-text-muted text-[11px] font-semibold",
										children: "Message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "message",
										id: "message",
										rows: 6,
										className: "\n                                bg-surface-elevated border border-text-muted py-2 pl-6 pr-4\n                                outline-0 focus:ring focus:ring-accent-hover\n                                rounded-xl text-sm text-text-primary font-normal \n                                placeholder:text-text-muted placeholder:font-normal cursor-pointer",
										placeholder: "Hi Raphael, I'd love to discuss..."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedButton, {
									classes: "flex gap-2 items-center py-3 px-6 rounded-xl flex justify-center items-center w-full md:w-fit  cursor-pointer\n                        transition bg-accent-primary hover:bg-accent-hover text-text-primary text-sm shadow-shadow-medium shadow-lg",
									func: () => void 0,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
										size: 16,
										className: "shrink-0"
									}), "Send Message"]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "block lg:hidden text-text-muted w-full h-0.5 mt-18 mb-18" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4 lg:w-[30%]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-text-primary text-xl font-bold",
								children: "Other ways to reach me"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-surface-elevated border border-text-muted rounded-xl p-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "bg-accent-primary p-2 rounded-lg h-fit w-fit",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
													size: 19,
													className: "shrink-0"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "text-text-primary text-sm",
														children: "Email"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-accent-text text-[11px] font-semibold",
														children: "onwujekwechibuzor@gmail.com"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-text-muted text-[11px] lg:w-[70%] leading-6 font-semibold",
														children: "Best for project inquiries and collaborations."
													})
												]
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-surface-elevated border border-text-muted rounded-xl p-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "bg-accent-primary p-2 rounded-lg h-fit w-fit",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaTwitter, {
													size: 19,
													className: "shrink-0"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "text-text-primary text-sm",
														children: "Twitter"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-accent-text text-[11px] font-semibold",
														children: "@raph_maxi"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-text-muted text-[11px] leading-6 font-semibold",
														children: "My DM is always open."
													})
												]
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-surface-elevated border border-text-muted rounded-xl p-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "bg-accent-primary p-2 rounded-lg h-fit w-fit",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaLinkedin, {
													size: 19,
													className: "shrink-0"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "text-text-primary text-sm",
														children: "LinkedIn"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-accent-text text-[11px] font-semibold",
														children: "Chibuzor Onwujekwe"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-text-muted text-[11px] lg:w-[70%] leading-6 font-semibold",
														children: "Professional background and endorsements."
													})
												]
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "bg-surface-elevated border border-text-muted rounded-xl p-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "bg-accent-primary p-2 rounded-lg h-fit w-fit",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaGithub, {
													size: 19,
													className: "shrink-0"
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex flex-col gap-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "text-text-primary text-sm",
														children: "Github"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-accent-text text-[11px] font-semibold",
														children: "github.com/Maxi-Raph"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-text-muted text-[11px] lg:w-[70%] leading-6 font-semibold",
														children: "Browse my open source contributions."
													})
												]
											})]
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-surface-elevated border border-text-muted rounded-xl p-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4 items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										size: 19,
										className: "shrink-0 text-gray-600"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "text-text-primary text-sm",
											children: "Lagos, Nigeria"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-text-muted text-[11px] leading-6 font-semibold",
											children: "WAT — UTC+1"
										})]
									})]
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-18" })
		]
	})] });
}
//#endregion
export { ContactPage as component };
