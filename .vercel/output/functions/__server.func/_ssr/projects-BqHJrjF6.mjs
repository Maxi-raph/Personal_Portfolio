import { r as __toESM } from "../_runtime.mjs";
import { I as require_react, _ as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as AnimatedLink, i as useNav, r as TechStack } from "./router-CfvuSJSL.mjs";
import { t as AnimatedButton } from "./AnimatedButton-CADEhydd.mjs";
import { t as projectsArr } from "./projectsArr-Bo2aMvh4.mjs";
import { t as ProjectCard } from "./ProjectCard-DXOJ8DSe.mjs";
import { t as ClipLoader } from "../_libs/react-spinners.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-BqHJrjF6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProjectsPage() {
	const projects = projectsArr;
	const categoryArr = [
		"All",
		"Web Apps",
		"Landing Pages",
		"Dashboards",
		"Experiments"
	];
	const [category, setCategory] = (0, import_react.useState)("All");
	const filteredProjects = category === "All" ? projects : projects.filter((project) => project.category === category);
	const firstFeaturedProject = projects.filter((p) => p.featured);
	const { isOpen, setIsOpen } = useNav();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-wrap mt-34 relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `md:hidden ${isOpen && "absolute z-20 inset-0 bg-background/40 backdrop-blur-[2px] pointer-events-auto"}`,
				onClick: () => setIsOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:justify-between md:items-end md:flex-row gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-accent-text text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block mr-2",
								children: "//"
							}), " WORK"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-4xl md:text-4xl lg:text-5xl font-bold text-text-primary max-w-md md:max-w-sm lg:max-w-md",
							children: "Selected Projects"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-text-secondary text-sm max-w-120 leading-relaxed md:leading-normal sm:w-140! md:w-130! mt-2",
							children: "A curated collection of my frontend projects — web apps, landing pages, dashboards, and UI experiments built with care and precision."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-text-primary font-bold text-4xl flex items-center",
					children: [projects.length > 0 ? projects.length + "+" : 0, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block ml-2 text-xs text-text-muted",
						children: "projects total"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-18 mb-6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 w-full items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block rounded-full w-1.5 h-1.5 bg-accent-primary shadow-3xl shadow-accent-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-text-secondary font-semibold leading-relaxed tracking-widest",
						children: "FEATURED"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row w-full min-h-fit rounded-2xl bg-surface border border-border-default",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "i.png",
						alt: "",
						className: "h-82 md:h-102! lg:h-86! xl:h-82! w-full flex-1 shrink-0 rounded-tl-2xl rounded-tr-2xl md:rounded-bl-2xl"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-6 md:w-[60%] rounded-tr-2xl rounded-br-2xl p-10 h-fit",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center text-xs gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-text-secondary font-semibold",
									children: "01"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block py-1 px-2 rounded-xl bg-surface-elevated text-accent-text\n                            shadow-shadow-medium shadow-md",
									children: "Featured"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-text-primary font-bold text-3xl",
								children: firstFeaturedProject[0]?.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-text-secondary text-sm leading-6",
								children: firstFeaturedProject[0]?.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechStack, {
								techStack: firstFeaturedProject[0]?.stacks?.map((name) => ({ name })) || [],
								containerClass: "flex flex-wrap items-center gap-4",
								classes: "text-accent-text py-1 px-2 text-xs rounded-lg\n                        text-[10px] font-semibold bg-surface-elevated shadow-shadow-medium shadow-md"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedLink, {
								classes: "text-accent-primary text-xs font-bold hover:text-accent-hover hover:scale-95 w-fit transition",
								route: "/projects/detail/$projectId",
								params: { projectId: firstFeaturedProject[0]?.id },
								func: () => void 0,
								children: ["View Case Study ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									className: "inline-block ml-1",
									size: 14
								})]
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-18 mb-6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-4 whitespace-nowrap",
				children: categoryArr.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedButton, {
					classes: `
                    py-2 px-4 text-xs font-semibold rounded-xl
                    transition shadow-shadow-heavy shadow-lg 
                    hover:bg-accent-hover hover:text-background text-sm 
                    cursor-pointer ${category === cat ? "bg-accent-hover text-background" : "bg-gray-700/30 text-text-secondary"}`,
					func: () => setCategory(cat),
					children: cat
				}, cat))
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5 mt-6 mb-18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-text-primary text-4xl font-bold",
					children: "Projects"
				}), filteredProjects.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 \n                    md:grid-cols-3 gap-6",
					children: filteredProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
						title: project.title,
						img: project.img,
						desc: project.desc,
						stacks: project.stacks,
						route: project.route,
						params: { projectId: project.id },
						id: Number(project.id)
					}, project.id))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-center items-center\n                    w-full h-70 rounded-2xl bg-surface border border-border-default",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-text-muted flex justify-center items-center",
						children: [
							"No ",
							category,
							" found..."
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-8 flex justify-center items-center py-2 px-6 w-full h-70 rounded-3xl bg-surface border border-border-default",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-center items-center flex-col gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-full w-12 h-12 flex justify-center items-center bg-surface-elevated border border-border-default",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipLoader, {
								color: "var(--accent-primary)",
								size: 24,
								speedMultiplier: .8
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-text-primary text-2xl",
							children: "More Projects Incoming"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-text-secondary text-xs",
							children: "Currently building more case studies. Check back soon."
						})
					]
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "text-text-muted w-full h-0.5" })] });
}
//#endregion
export { ProjectsPage as component };
