import { useState } from "react";
import Form from "./components/Form/Form";
import RecommendationList from "./components/RecommendationList/RecommendationList";
import { Product } from "./types/product";

function App() {
  const [recommendations, setRecommendations] = useState<Product[]>([]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center p-4 text-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-center" tabIndex={0}>
        Recomendador de Produtos RD Station
      </h1>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 md:col-span-2 mb-6">
          <p
            className="text-base leading-relaxed"
            aria-label="Descrição do recomendador de produtos"
            tabIndex={0}
          >
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
            encontrar uma variedade de produtos da RD Station, cada um projetado
            para atender às necessidades específicas do seu negócio. De CRM a
            Marketing, de Conversas a Inteligência Artificial, temos uma solução
            para ajudar você a alcançar seus objetivos. Use o formulário abaixo
            para selecionar suas preferências e funcionalidades desejadas e
            receba recomendações personalizadas de produtos que melhor atendam
            às suas necessidades.
          </p>
        </div>

        <div className="w-full">
          <Form setRecommendations={setRecommendations} />
        </div>

        <div className="w-full">
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
