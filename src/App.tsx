import React from 'react';
import { Mail, Phone, MapPin, Brain, Award, HeartPulse, Users, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://static.wixstatic.com/media/a0773e_63e8e417e6dd4336899c215c9d1c2f90~mv2.jpg/v1/crop/x_0,y_80,w_2954,h_1823/fill/w_479,h_288,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1_edited.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
            Agnieszka Tabaszewska
          </h1>
          <div className="text-xl md:text-2xl text-gray-200 mb-8 text-center space-y-2">
            <p>Psycholog</p>
            <p>Diagnosta Kliniczny</p>
            <p>Psychoterapeutka</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <a href="#contact" className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Kontakt
            </a>
            <a href="#about" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
              O Mnie
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto" id="about">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">O Mnie</h2>
            <p className="text-gray-600 mb-6">
              Jestem specjalistką w zakresie psychologii klinicznej i psychoterapeutką. Od wielu lat staram się łączyć naukę, którą jest psychologia ze sztuką psychoterapii. O swojej pracy z pacjentami lubię myśleć jak o podróży, w której można dokonywać odkryć, przyglądać się różnym widokom, ale przede wszystkim doświadczać wewnętrznych transformacji przekładających się na lepsze funkcjonowanie.
            </p>
            <p className="text-gray-600 mb-6">
              Jestem nastawiona na rozwój i stawianie czoła cierpieniu. A to wszystko dzięki spotkaniu dwóch osób w bezpiecznej przestrzeni gabinetu, w którym cenię sobie zarówno rzetelną diagnozę jak i swobodne skojarzenia. Dbam o poufność.
            </p>
            <p className="text-gray-600 italic">
              "Przyjemnie jest zgubić się czasem na szlaku, lecz ważne również, by dotrzeć do celu."
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://static.wixstatic.com/media/a0773e_63e8e417e6dd4336899c215c9d1c2f90~mv2.jpg/v1/crop/x_0,y_80,w_2954,h_1823/fill/w_479,h_288,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/1_edited.jpg" 
              alt="Agnieszka Tabaszewska - Psycholog"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Areas of Work */}
      <section className="bg-white py-20 px-4 md:px-8" id="areas">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Obszary Pracy w Gabinecie</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <Brain className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Problemy Emocjonalne</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Lęk</li>
                <li>• Depresja</li>
                <li>• Kryzys psychiczny</li>
                <li>• Poczucie bólu psychicznego</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Problemy Relacyjne</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Problemy w relacjach</li>
                <li>• Konflikty wewnętrzne</li>
                <li>• Problemy z agresją</li>
                <li>• Zachowania autodestrukcyjne</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <Sparkles className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Rozwój Osobisty</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Potrzeba lepszego rozumienia siebie</li>
                <li>• Chęć rozwoju</li>
                <li>• Poprawa jakości życia</li>
                <li>• Zaburzenia psychosomatyczne</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8" id="services">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Oferta</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <HeartPulse className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Konsultacje Psychologiczne</h3>
              <p className="text-gray-600">
                Spotkania mające na celu rozpoznanie potrzeb i problematyki pacjenta. Pomagają w zrozumieniu problemu oraz ukierunkowaniu na dalszą pracę.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Psychoterapia Indywidualna</h3>
              <p className="text-gray-600">
                Proces pracy nad zmianą w wyniku interakcji dwóch umysłów - pacjenta i terapeuty. Praca odbywa się na jasno określanych warunkach.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Brain className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Diagnoza Kliniczna</h3>
              <p className="text-gray-600">
                Kompleksowa diagnoza psychologiczna wykorzystująca rozmowę, obserwację i narzędzia psychometryczne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Kompetencje i Doświadczenie</h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <h3 className="text-xl font-semibold">17 lat doświadczenia w pracy z pacjentami</h3>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>• Specjalizacja z psychologii klinicznej (nr dyplomu 006/2017.1/111)</p>
              <p>• Ukończony całościowy kurs psychoterapii w Szpitalu im. dr. Józefa Babińskiego w Krakowie</p>
              <p>• Studia podyplomowe w SWPS w Warszawie w zakresie diagnozy psychologicznej</p>
              <p>• Doświadczenie w Klinice Psychiatrii w Centralnym Szpitalu Klinicznym w Łodzi</p>
              <p>• Praktyka prywatna we własnym gabinecie</p>
              <p>• Współpraca z lekarzami</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto" id="contact">
        <h2 className="text-3xl font-bold mb-12 text-center">Kontakt</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Telefon</h3>
                <p className="text-gray-600">+48 506 488 450</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">agnieszka.tabaszewska@tutanota.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold">Adres</h3>
                <p className="text-gray-600">ul. Tuwima 15, lok. 6, II Piętro</p>
                <p className="text-gray-600">90-010 Łódź</p>
              </div>
            </div>
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800">Konsultacje ONLINE dostępne po wcześniejszym uzgodnieniu telefonicznym lub email.</p>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Imię i Nazwisko
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Wiadomość
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Wyślij Wiadomość
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>© {new Date().getFullYear()} Agnieszka Tabaszewska. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
