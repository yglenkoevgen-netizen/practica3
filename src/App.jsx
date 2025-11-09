import BlogCard from './components/BlogCard';

function App() {
  const cardData = {
    image: "/assets/Blog Image.png",
    category: "HTML & CSS",
    date: "Публікація 21 Вересня 2025",
    description: (
      <>
        Мета практичної роботи полягає в тому, щоб налаштувати середовище розробки 
        <strong> VS Code</strong>, а також реалізувати картку блогу для вдосконалення 
        фундаментальних навичок з <strong>HTML та CSS</strong>.
      </>
    ),
    title: "Практична №3",
    authorImage: "/assets/avatar_male.png",
    authorName: "Угленко Євгеній"
  };

  return (
    <main>
      <BlogCard 
        {...cardData}
      />
    </main>
  );
}

export default App;