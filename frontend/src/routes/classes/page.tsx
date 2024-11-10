import { BookOpen, Clock, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-side-bar";

export default function Classes() {
  const sessions = [
    {
      title: "Career Development Strategy",
      description:
        "Expert guidance on career advancement and professional growth strategies.",
      category: "Career Development",
      mentor: 13,
      rating: 4.8,
      duration: 60,
      price: 80,
      categoryId: 1, // Adicionando um ID de categoria para simplificação
    },
    {
      title: "Tech Leadership Mastery",
      description:
        "Learn essential leadership skills for technology teams and projects.",
      category: "Technology",
      mentor: 7,
      rating: 4.9,
      duration: 60,
      price: 120,
      categoryId: 2,
    },
    {
      title: "Tech Leadership Mastery",
      description:
        "Learn essential leadership skills for technology teams and projects.",
      category: "Technology",
      mentor: 7,
      rating: 4.9,
      duration: 60,
      price: 120,
      categoryId: 3,
    },
    {
      title: "Tech Leadership Mastery",
      description:
        "Learn essential leadership skills for technology teams and projects.",
      category: "Technology",
      mentor: 7,
      rating: 4.9,
      duration: 60,
      price: 120,
      categoryId: 4,
    },
    // Adicione mais sessões conforme necessário...
  ];

  const getCategoryColor = (categoryId: number): string => {
    const colors: { [key: number]: string } = {
      1: "bg-[#8C7EC8]",
      2: "bg-[#4184BE]",
      3: "bg-[#667F0B]",
      4: "bg-[#DA6E2B]",
    };
    return colors[categoryId] || "bg-gray-500";
  };

  return (
    <div className="container mx-auto py-6">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger className="mr-2" />

        <div className="w-full">
          <h1 className="text-3xl font-bold text-start mb-8">
            Available Mentoring Sessions
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sessions.map((session) => (
              <Card
                key={session.title}
                className="overflow-hidden border-2 hover:border-[hsl(var(--primary))] transition-colors rounded-none"
              >
                <CardHeader className={`p-4 `}>
                  <Badge
                    variant="secondary"
                    className={`w-fit mb-2 ${getCategoryColor(session.categoryId)} text-white`}
                  >
                    {session.category}
                  </Badge>
                  <h2 className="text-xl font-semibold">{session.title}</h2>
                  <p className="text-sm opacity-90">{session.description}</p>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>Mentor #{session.mentor}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-primary text-yellow-primary" />
                      <span>{session.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{session.duration} min</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      <span>${session.price}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button
                    className={`w-full text-white ${getCategoryColor(session.categoryId)} hover:opacity-90 rounded-none`}
                  >
                    Book Session
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
