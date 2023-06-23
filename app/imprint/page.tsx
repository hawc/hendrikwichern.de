import { Box, Container } from '@/components/box';
import { Headline } from '@/components/headline';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Link } from '@/components/link';

export default function Page() {
  return (
    <div className='grid gap-2px' style={{ "--highlight": 'var(--highlight-orange)' } as React.CSSProperties}>
      <Header>
        <div className='font-semibold'>
          <Link href="/">Home</Link>
        </div>
      </Header>
      <main className='grid gap-2px'>
        <Container>
          <Box highlighted>
            <Headline type='h1'>Imprint</Headline>
          </Box>
        </Container>
        <Container>
          <Box>
            <div>
              <Headline type='h3' tag='h3'>
                Angaben nach § 5 TMG, sowie verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </Headline>
              <div>Hendrik Wichern</div>
              <div className="mb-4">
                E-Mail: <span>web@hendrikwichern.de</span>
              </div>
              <Headline type='h3' tag='h3'>Disclaimer</Headline>
              <Headline type='h5' tag='h3' className='mt-3'>Haftung für Inhalte</Headline>
              <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
              <Headline type='h5' tag='h3' className='mt-3'>Haftung für Links</Headline>
              <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
              <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
              <Headline type='h5' tag='h3' className='mt-3'>Urheberrecht</Headline>
              <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
              <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
            </div>
          </Box>
        </Container>
      </main>
      <Footer />
    </div>
  )
}
