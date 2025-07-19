import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    title: 'Introducing AI-Powered Web Scraping',
    excerpt: 'Learn how artificial intelligence is revolutionizing web data extraction and analysis.',
    author: 'Sarah Johnson',
    date: '2024-03-20',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
    category: 'Technology'
  },
  {
    title: 'Best Practices for Ethical Web Scraping',
    excerpt: 'A comprehensive guide to responsible data collection and website crawling.',
    author: 'Michael Chen',
    date: '2024-03-15',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
    category: 'Guides'
  },
  {
    title: 'The Future of Data Collection',
    excerpt: 'Exploring emerging trends and technologies in web scraping and data analysis.',
    author: 'Emily Rodriguez',
    date: '2024-03-10',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    category: 'Industry'
  }
];

export default function BlogPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and updates from the Scrapify team
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-primary mb-2">{post.category}</div>
                <CardTitle className="text-xl mb-2">
                  <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary">
                    {post.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}