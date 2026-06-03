export interface Project {
  title:       string
  description: string
  tags:        string[]
  liveUrl?:    string    
  githubUrl?:   string
  imageUrl?:   string 
  isLive:      boolean
  isFeatured?: boolean 
}

export interface JourneyItem {
  title:      string
  place:      string
  period:     string
  highlights: string[]
}