export interface GallerySection {
  id: string;
  title: string;
  photos: string[];
}

export const gallerySections: GallerySection[] = [
  {
    id: "quest-2025",
    title: "Quest 2025 Highlights",
    photos: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1591115765373-5f9cf1da1f4a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop",
    ],
  },
  {
    id: "workshops-prev",
    title: "Past Workshops",
    photos: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    ],
  },
  {
    id: "campus",
    title: "Our Campus",
    photos: [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
    ],
  },
];
