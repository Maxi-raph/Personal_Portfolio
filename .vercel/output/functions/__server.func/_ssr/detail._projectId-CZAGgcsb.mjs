import { _ as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ExternalLink, m as ArrowLeft, p as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as FaGithub } from "../_libs/react-icons.mjs";
import { a as AnimatedLink, i as useNav, n as Route, r as TechStack } from "./router-CfvuSJSL.mjs";
import { t as projectsArr } from "./projectsArr-Bo2aMvh4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/detail._projectId-CZAGgcsb.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectDetailsPage() {
	const { projectId } = Route.useParams();
	const project = projectsArr.find((p) => p.id === projectId);
	const { isOpen, setIsOpen } = useNav();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `md:hidden ${isOpen && "absolute z-20 inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-auto"}`,
			onClick: () => setIsOpen(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "page-wrap mt-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedLink, {
					classes: "text-accent-primary text-xs font-bold hover:text-accent-hover hover:scale-95 w-fit transition",
					route: "/projects",
					func: () => void 0,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "inline-block mr-1",
						size: 14
					}), "Back To Projects"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 items-center mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-accent-text",
						children: [Number(project?.id) > 10 ? project?.id : "0" + Number(project?.id), " "]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block w-fit py-1 px-2 rounded-xl border border-border-default\r\n          bg-[color-mix(in_oklab,var(--accent-primary)28%,transparent)] text-text-primary text-[11px] shadow-shadow-medium shadow-lg",
						children: project?.category.slice(0, project?.category.length - 1)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl md:text-4xl lg:text-5xl w-84 md:w-auto md:max-w-xl lg:max-w-4xl font-extrabold text-text-primary leading-snug mt-6",
					children: project?.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-text-muted text-sm md:text-[16px]! font-normal mt-6 max-w-lg md:max-w-xl! leading-relaxed",
					children: project?.desc
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedLink, {
						classes: "flex gap-2 items-center py-2.5 px-6 rounded-xl\r\n            transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-shadow-medium shadow-lg",
						route: "/",
						func: () => void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
							size: 16,
							className: "mr-1"
						}), "Live Site"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedLink, {
						classes: "flex gap-2 items-center py-2.5 px-6 rounded-xl\r\n            transition bg-gray-700/30 hover:bg-accent-hover hover:text-background text-sm shadow-shadow-medium shadow-lg",
						route: "/about",
						func: () => void 0,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaGithub, {
							size: 16,
							className: "mr-1"
						}), " Github"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-10 mb-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-surface-elevated border border-border-default rounded-3xl w-full h-108",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project?.img,
						alt: project?.title,
						className: "w-full h-full bg-cover rounded-3xl"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-10 mb-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-[90%] mx-auto h-0.5 mb-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-[90%] mx-auto grid gap-3 space-y-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent-text text-xs",
								children: "Role"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-text-primary text-sm font-semibold",
								children: "Frontend Engineer - Design Systems Lead"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 text-end md:text-start! md:mx-auto lg:mx-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent-text text-xs",
								children: "Timeline"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-text-primary text-sm font-semibold",
								children: "6 weeks"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 md:mx-auto lg:mx-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent-text text-xs",
								children: "Type"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-text-primary text-sm font-semibold",
								children: "Open Source"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent-text text-end md:text-start text-xs",
								children: "Stack"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechStack, {
								containerClass: "flex flex-wrap items-center justify-end md:justify-start gap-4",
								classes: "text-accent-text py-1 px-2 text-xs rounded-lg\r\n              text-[10px] font-semibold bg-surface-elevated shadow-shadow-medium shadow-lg",
								techStack: project?.stacks?.map((name) => ({ name })) || []
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-[90%] mx-auto h-0.5 mt-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-6 mb-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row gap-4 justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "md:w-[20%] text-accent-text text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block mr-2",
							children: "//"
						}), " CHALLENGE"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-text-primary text-xl font-bold",
								children: "Building a consistent UI foundation at scale"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-accent-text leading-5",
								children: "The product team was shipping features fast, but inconsistency crept in — button styles diverged across pages, spacing felt uneven, and accessibility was an afterthought. We needed a shared language."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-accent-text leading-5",
								children: "The core challenge: build something flexible enough to extend, strict enough to enforce consistency, and documented well enough that any developer could pick it up on day one."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "text-sm text-accent-text flex flex-col gap-3 list-disc ml-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No shared token system — colors and spacing were hardcoded" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Component duplication across 3 different product areas" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Zero a11y testing in the existing component library" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Developers spending hours re-implementing the same UI patterns" })
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-10 mb-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row gap-4 justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "md:w-[20%] text-accent-text text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block mr-2",
							children: "//"
						}), " SOLUTION"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-text-primary text-xl font-bold",
								children: "A token-driven system built on accessibility primitives"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-accent-text leading-5",
								children: "I architected Aether UI from the ground up — starting with a design token layer (colors, spacing, radius, typography), then building primitive components using Radix UI headless primitives to get ARIA compliance for free."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-accent-text leading-5",
								children: "Every component is documented in Storybook with interactive controls, accessibility annotations, and code snippets. The system is fully themeable via CSS variables and ships a dark and light mode out of the box."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-2 p-4 bg-surface-elevated border border-border-default rounded-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-bold text-[14px]",
											children: "40+ components"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-accent-text text-[11px]",
											children: "Fully documented and tested"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-2 p-4 bg-surface-elevated border border-border-default rounded-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-bold text-[14px]",
											children: "100% a11y compliant"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-accent-text text-[11px]",
											children: "WCAG 2.1 AA across all components"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-2 p-4 bg-surface-elevated border border-border-default rounded-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-bold text-[14px]",
											children: "Zero runtime dependencies"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-accent-text text-[11px]",
											children: "Tree-shakeable ESM output"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-2 p-4 bg-surface-elevated border border-border-default rounded-xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-bold text-[14px]",
											children: "Dark + light mode"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-accent-text text-[11px]",
											children: "CSS variable based theming"
										})]
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-10 mb-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "md:w-[20%] text-accent-text text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block mr-2",
							children: "//"
						}), " GALLERY"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-12 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-surface-elevated border border-border-default rounded-3xl col-span-12 row-span-16",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: void 0,
								alt: "",
								className: "w-full h-full bg-cover rounded-3xl"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-12 row-span-12 grid grid-cols-1 md:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-surface-elevated border border-border-default rounded-3xl col-span-1 row-span-12 md:col-span-1 md:row-span-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: void 0,
									alt: "",
									className: "w-full h-full bg-cover rounded-3xl"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-surface-elevated border border-border-default rounded-3xl col-span-1 row-span-12 md:col-span-1 md:row-span-12",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: void 0,
									alt: "",
									className: "w-full h-full bg-cover rounded-3xl"
								})
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-10 mb-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row gap-4 justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "md:w-[20%] text-accent-text text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block mr-2",
							children: "//"
						}), " RESULTS"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 flex flex-col gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-text-primary text-xl font-bold",
								children: "Shipped faster. More consistently. With confidence."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-accent-text leading-5",
								children: "Within 3 months of adoption, the team reported 60% reduction in design-to-dev handoff time. Component duplication dropped to near zero across all product surfaces. Accessibility audits went from failing to passing across the board."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-accent-text leading-5",
								children: "Key takeaway: a design system isn't a project you finish — it's infrastructure you maintain. The most important work was writing great documentation and making contributors feel welcome."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-10 mb-10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLink, {
						classes: `${Number(project?.id) <= 1 && "opacity-50 cursor-not-allowed"}
          flex flex-col gap-2 p-4 bg-surface-elevated 
          border border-border-default rounded-3xl shadow-shadow-medium shadow-lg`,
						route: "/projects/detail/$projectId",
						params: { projectId: String(Number(project?.id) - 1) },
						func: () => void 0,
						disabled: Number(project?.id) <= 1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
								size: 16,
								className: "text-accent-primary"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-bold text-[11px] text-text-muted",
									children: "Previous"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-accent-text text-[14px]",
									children: projectsArr?.find((p) => Number(project?.id) - 1 === Number(p.id))?.title || "— None"
								})]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedLink, {
						classes: `${Number(project?.id) >= projectsArr.length && "opacity-50 cursor-not-allowed"}
          flex flex-col items-end gap-2 p-4 bg-surface-elevated 
          border border-border-default rounded-3xl shadow-shadow-medium shadow-lg`,
						route: "/projects/detail/$projectId",
						params: { projectId: String(Number(project?.id) + 1) },
						func: () => void 0,
						disabled: Number(project?.id) >= projectsArr.length,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-end gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-bold text-[11px] text-text-muted",
									children: "Next"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-accent-text text-[14px]",
									children: projectsArr?.find((p) => Number(project?.id) + 1 === Number(p.id))?.title || "— None"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								size: 16,
								className: "text-accent-primary"
							})]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-10 mb-10" })
			]
		})]
	});
}
//#endregion
export { ProjectDetailsPage as component };
