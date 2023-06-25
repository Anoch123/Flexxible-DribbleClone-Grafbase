import { g, auth, config } from '@grafbase/sdk'

const User = g.model("User", {
  name:  g.string().length({min: 2, max: 20}),
  emial: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects: g.relation(() => Project).list().optional(), 
})

const Project = g.model("Projects", {
  title: g.string().length({ min: 2, max: 20}),
  description: g.string().optional(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User)
})

export default config({
  schema: g
})
