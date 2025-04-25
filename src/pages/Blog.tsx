
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, User } from "lucide-react"
import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Explore the latest trends shaping the future of web development, from AI integration to advanced frontend frameworks.",
      author: "Sarah Johnson",
      readTime: "5 min read",
      date: "April 20, 2025",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Building Scalable Applications with Modern Architecture",
      excerpt: "Learn best practices for creating scalable and maintainable applications using modern architectural patterns.",
      author: "Michael Chen",
      readTime: "7 min read",
      date: "April 18, 2025",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Mastering TypeScript: Advanced Tips and Tricks",
      excerpt: "Deep dive into TypeScript's advanced features and how to leverage them in your projects.",
      author: "Emily Rodriguez",
      readTime: "6 min read",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "The Impact of AI on Software Development",
      excerpt: "Discover how artificial intelligence is transforming the software development landscape.",
      author: "David Kim",
      readTime: "8 min read",
      date: "April 12, 2025",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Optimizing React Performance: A Comprehensive Guide",
      excerpt: "Learn strategies and techniques to improve your React application's performance.",
      author: "Alex Turner",
      readTime: "10 min read",
      date: "April 10, 2025",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Cloud-Native Development: Best Practices",
      excerpt: "Essential guidelines for building and deploying cloud-native applications.",
      author: "Rachel Martinez",
      readTime: "9 min read",
      date: "April 8, 2025",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-agency-blue mb-4">
              Insights & Articles
            </h1>
            <p className="text-lg text-gray-600">
              Stay updated with the latest trends, insights, and best practices in software development and digital innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-gray-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/blog/${post.id}`}>
                      <BookOpen className="mr-2" />
                      Read More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Blog
