import "layouts/MyLayout.vue"
const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [{ path: "/", component: () => import("pages/Profile.vue") },
    { path: "/todo", component: () => import("pages/Todo.vue") },
    { path: "/blogs", component: () => import("pages/listBlogs.vue") },
    { path: "/show", component: () => import("pages/showBlogs.vue") },
    { path: "/help", component: () => import("pages/Help.vue") }
  ]},

  { path: "/blogs", component: () => import("pages/listBlogs.vue") },
  { path: "/show", component: () => import("pages/showBlogs.vue") },
  { path: "/help", component: () => import("pages/Help.vue") },
  { path: '/blog/:id', component: () => import('pages/singleBlog')}
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
