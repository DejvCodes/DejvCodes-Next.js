import Link from "next/link";
import {ArrowLeft} from 'lucide-react';

const PrivacyPolicy = () => {
  return <main className="min-h-screen py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link 
        href="/" 
        className="inline-flex items-center text-slate-400 hover:text-light-blue transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Zpět na hlavní stránku
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Ochrana osobních údajů
      </h1>

      <div className="space-y-8 text-slate-300">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Kdo jsme</h2>
          <p className="leading-relaxed mb-3">
            Naše webová adresa je: www.dejvcodes.com. Provozovatelem webu je David Kalmus se sídlem 
            Pardubice, IČ: 24078140, zapsán v živnostenském rejstříku.
          </p>
          <div className="text-slate-400 mt-4">
            <p>David Kalmus</p>
            <p>IČO: 24078140</p>
            <p>Pardubice, Česká republika</p>
            <p>E-mail: <a href="mailto:info@dejvcodes.com" className="text-light-blue hover:underline">info@dejvcodes.com</a></p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Jaké osobní údaje zpracováváme</h2>
          
          <h3 className="text-xl font-semibold text-white mb-3 mt-6">Serverové logy</h3>
          <p className="leading-relaxed mb-4">
            Při návštěvě těchto webových stránek automaticky zaznamenává webový server základní technické údaje 
            (IP adresa, čas přístupu, typ prohlížeče). Toto zpracování probíhá automaticky u webhostingového 
            poskytovatele (Vedos) a je nezbytné pro zajištění funkčnosti a bezpečnosti webu.
          </p>
          <p className="leading-relaxed mb-4">
            <strong>Právní základ:</strong> Oprávněný zájem správce na zajištění bezpečnosti a technického provozu 
            (čl. 6 odst. 1 písm. f) GDPR).
          </p>
          <p className="leading-relaxed">
            <strong>Doba uchovávání:</strong> Maximálně 30 dní.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Cookies</h2>
          <p className="leading-relaxed">
            Tento web nepoužívá žádné cookies, analytické nástroje ani sledovací technologie. 
            Vaše chování na webu není monitorováno ani analyzováno.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">E-mailová komunikace</h2>
          <p className="leading-relaxed">
            Pokud nás kontaktujete e-mailem prostřednictvím odkazu na webu, komunikace probíhá 
            mimo tento web pomocí vašeho e-mailového klienta. Údaje z takové komunikace zpracováváme 
            pouze za účelem odpovědi na váš dotaz.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Vaše práva</h2>
          <p className="leading-relaxed mb-3">
            Máte právo na přístup k informacím o zpracování vašich údajů a právo podat stížnost 
            u Úřadu pro ochranu osobních údajů. V případě dotazů nás kontaktujte na{' '}
            <a href="mailto:info@dejvcodes.com" className="text-light-blue hover:underline">
              info@dejvcodes.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Jak chráníme vaše informace</h2>
          <p className="leading-relaxed">
            Webové stránky využívají HTTPS šifrování pro zabezpečenou komunikaci. Vaše údaje 
            neprodáváme, nepředáváme ani nesdílíme s třetími stranami kromě webhostingového 
            poskytovatele (Vedos), který zajišťuje technický provoz webu.
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-800/50">
        <Link 
          href="/" 
          className="inline-flex items-center text-slate-400 hover:text-light-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Zpět na hlavní stránku
        </Link>
      </div>
    </div>
  </main>
}

export default PrivacyPolicy