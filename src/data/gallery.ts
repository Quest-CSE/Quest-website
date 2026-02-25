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
      "https://res.cloudinary.com/dvvijlfio/image/upload/v1771933193/iuhoh_rehtq5.jpg",
      "https://res.cloudinary.com/dvvijlfio/image/upload/v1771933194/rogero_p6ijnr.jpg",
      "https://res.cloudinary.com/dvvijlfio/image/upload/v1771933010/IMG_8735_vrp002.jpg",
      "https://res.cloudinary.com/dvvijlfio/image/upload/v1771933000/IMG_8750_e8nulo.jpg",
      "https://res.cloudinary.com/dvvijlfio/image/upload/v1771994340/IMG_5433_na624y.jpg",
      "https://res.cloudinary.com/dvvijlfio/image/upload/v1771935480/IMG_7010_iue8wd.jpg",
    ],
  },
  {
    id: "workshops-prev",
    title: "Past Workshops",
    photos: [
      "https://res.cloudinary.com/dvvijlfio/image/upload/v1771934106/ewgre_mdrffo.jpg",
      "https://res.cloudinary.com/dvvijlfio/image/upload/v1771934168/wefwe_rhib49.jpg",
      "https://res.cloudinary.com/dvvijlfio/image/upload/v1771934106/fewfw_mb7u4n.jpg",
      "https://res.cloudinary.com/dvvijlfio/image/upload/v1771934105/btrb_cpfjf7.jpg",
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
