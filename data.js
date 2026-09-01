const PEOPLE = [
  {
    "name": "Bajda Dawid",
    "description": "Dyrektor z powołania, <br>kierownik z charakteru, <br>a za kierownicą — BMW, bo przecież decyzje muszą mieć odpowiednią klasę. 😎 <br>Wiem wszystko. <br>Widzę wszystko. <br>Kontroluję wszystko. <br>Jeżeli czegoś nie wiem — to znaczy, że jeszcze nikt mnie nie poinformował. <br>W pracy pilnuję wyników, <br>w BMW pilnuję obrotów, <br>a w firmie pilnuję, żeby każdy wiedział, <br>kto tu trzyma kierownicę"
  },
  {
    "name": "Blachut Remigiusz",
    "description": "NASZ IT GUY! Człowiek komputer. Wszystko zrobi, wszystko załatwi"
  },
  {
    "name": "Bobek Kacper",
    "description": "Kacper, Kacpi, Bobi — różne imiona, ten sam człowiek. Sigma i samozwańczy samiec alfa z Rudy Śląskiej.<br><br>Na co dzień siłownia, piłka nożna i dbanie o formę. W weekend impreza, piwerko w ogrodzie i obowiązkowe kręcenie bioderkiem. Przystojny, dobrze zbudowany i zawsze gotowy doradzić w kwestii stylu — nie wiesz, jak się ubrać? Zobacz na mnie.<br><br>Potrafię prowadzić zarówno głębokie rozmowy, jak i takie, po których szybko robi się gorąco i ciężko utrzymać kontakt wzrokowy. Wszystko zależy od tego, jak dobrze nam się rozmawia… i jak blisko siebie siedzimy.<br><br>Chcesz pokręcić bioderkiem? Zapraszam ze mną w weekend.<br>Chcesz pogadać? Też dobrze trafiłaś.<br>Chcesz się poznać?<br><br>Instagram: @xkapi3<br><br>Zeskanowałaś kod, więc teraz ruch należy do Ciebie."
  },
  {
    "name": "Cebulski Arek",
    "description": ""
  },
  {
    "name": "Czyż Konrad",
    "description": ""
  },
  {
    "name": "Gawroński Paweł",
    "description": "Paweł, czyli @pan\\_gawronski.<br><br>Chcę być influencerem, więc obserwacja teraz może się kiedyś okazać dobrą inwestycją.<br><br>Lubię podróżować, dobrze się ubierać i wyglądać tak, jakbym zawsze był gotowy na zdjęcie. Mam narzeczoną Magdę i Popi — pudelka, który prawdopodobnie ma większe szanse na karierę w internecie niż ja.<br><br>Sprzedam Ci praktycznie wszystko. Jeśli myślisz, że czegoś nie potrzebujesz, daj mi pięć minut. Zdarza mi się też trochę podkolorować rzeczywistość — nazwijmy to talentem do storytellingu.<br><br>Podobno łatwo mnie uruchomić. Wystarczy odpowiedni tekst, mała zaczepka i z człowieka spokojnego robi się pełne widowisko.<br><br>Podróże, dobre ciuchy, sprzedaż, Magda, Popi i plany na internetową sławę — mniej więcej tak wygląda mój świat.<br><br>Chcesz sprawdzić, czy naprawdę taki jestem?<br>Instagram: @pan\\_gawronski"
  },
  {
    "name": "Góra Radek ex",
    "description": "Radek, Radzio — jak kto woli. Prawa ręka dyrektora i człowiek, bez którego podobno żaden projekt nie może zostać zatwierdzony.<br><br>Podobno.<br><br>Jestem przykładnym mężem Gosi i naprawdę staram się nie ulegać złemu wpływowi kolegów. Problem w tym, że gdzieś głęboko we mnie mieszka drugi Radzio.<br><br>I czasem wychodzi ze mnie ten drugi Radzio — trochę jak Voldemort, kiedy w „Zakonie Feniksa” przejmuje Harry’ego w Ministerstwie Magii, chwilę po pojedynku z Dumbledore’em, wśród rozbitego szkła. Nagle wiadomo, że coś poszło nie tak.<br><br>Z Gosią nie potrafimy usiedzieć na miejscu. Rowery, góry, Dolomity, SUP — daj nam aktywność, a prawdopodobnie już mamy do niej sprzęt.<br><br>Matcha? Tak.<br>Espresso tonic? Oczywiście.<br>Miejsce, gdzie wszyscy wyglądają, jakby właśnie wyszli z sesji do magazynu o designie? Jeszcze lepiej.<br><br>Aktualnie remontuję mieszkanie, więc niewykluczone, że już niedługo będzie można podziwiać mnie również jako influencera wnętrzarskiego na homier\\_inside.<br><br>Pod płaszczem wąsa i pięknej buzi kryje się też niedoszła gwiazda piłki nożnej.<br><br>Kariera nie wyszła?<br><br>Spokojnie.<br><br>Talent sportowy nadal wykorzystuję.<br><br>Głównie robiąc breakdance na imprezach okolicznościowych.<br><br>A teraz wystarczy tego Radzia.<br><br>Projekt sam się nie zatwierdzi."
  },
  {
    "name": "Góra Radek log",
    "description": ""
  },
  {
    "name": "Grudzień Adam",
    "description": ""
  },
  {
    "name": "Jabłoński Damian",
    "description": ""
  },
  {
    "name": "Jędrzejczyk Michał",
    "description": "Cześć, jestem Michał. <br><br>Kiedyś pracowałem w biurze na szybach, a teraz działam na zwrotach i reklamacjach. Jak coś się nie zgadza, trzeba wystawić korektę. Nie robię tego z przyjemnością, ale ktoś musi. 😅 Jak DHL zbije szybę, to też się tym zajmę i zgłoszę reklamację. Jak ktoś potrzebuje pomocy, to pomogę."
  },
  {
    "name": "Jochimski Karol",
    "description": ""
  },
  {
    "name": "Knut Grzegorz",
    "description": "Czasem nawet kawkę spijam."
  },
  {
    "name": "Kosiński Łukasz",
    "description": ""
  },
  {
    "name": "Kurek Remek",
    "description": "JESTEM REMEK.<br>Potrafię zrobić dobrą bułę,<br>i potrafię zrobić interes życia — najlepiej w nieruchomościach.<br>Mam kilka mieszkań, dobry styl<br>i Renault Megane,<br>bo majątek trzeba budować, a nie od razu pokazywać. <br>Na pozór konkretny facet od interesów,<br>a w środku romantyk, który potrafi uronić łzę na Hachiko.<br>Do tego mam jedną wyjątkową umiejętność:<br>zawsze znajdę żart w punkt.<br>Nawet jeśli sytuacja tego absolutnie nie wymaga.<br>REMIGIUSZ — pół biznesmen, pół romantyk,<br>100% człowiek od dobrej buły"
  },
  {
    "name": "Lewandowski Heniek",
    "description": "JESTEM HENRYK.<br><br>W tej firmie jestem tak długo,<br>że numery CAT mam zapisane nie w telefonie,<br>tylko w DNA.<br><br>Klient podaje numer części —<br>Henryk już wie, co to jest, do jakiej maszyny pasuje i prawdopodobnie pamięta, kto kupował ją w 2014 roku.<br><br>Telefon dzwoni.<br><br>Henryk: „Czego znowu?”<br>Klient: „Dzień dobry, chciałem tylko zapytać…”<br><br>Henryk już wie, że to nie będzie „tylko”. <br><br>Nie potrzebuje katalogu.<br>Potrzebuje tylko świętego spokoju.<br><br>Ma pamięć jak komputer,<br>kondycję jak maratończyk po kawie,<br>cierpliwość jak Windows 98<br>i ripostę szybszą niż wyszukiwarka Google .<br><br>HENRYK — człowiek, który zna każdy numer CAT,<br><br>ale nie każdy klient zasługuje na odpowiedź. 😎"
  },
  {
    "name": "Nowok Kamil",
    "description": "Kamil, pseudonim Samuraj — ksywka została po czasach, kiedy miałem długie włosy i wyglądałem, jakbym za chwilę miał bronić honoru całej dzielnicy.<br><br>Jestem fanem Harry’ego Pottera na poziomie, którego nie da się już ukryć — mam nawet kilka tatuaży związanych z tym światem. Największe marzenie? Czarna różdżka i peleryna niewidka. Różdżka wiadomo… magia. A peleryna? Bo czasami najchętniej po prostu zniknąłbym wszystkim z oczu.<br><br>Dogadam się praktycznie z każdym. Dopasuję się do człowieka, sytuacji i poziomu absurdu. Moim najlepszym przyjacielem jest Feniks — i powiedzmy, że to określenie ma dla mnie więcej niż jedno znaczenie. Stąd to szczególne przywiązanie.<br><br>Mam tak wielkie serce, że samo już nie wyrabia i potrzebuje wspomagania. Życie trochę mnie przetestowało, ale spokojnie — wynik 0:2 dla Kamila i gram dalej.<br><br>Kocham psy. Jeden z moich ma dość nietypowe hobby — jest samozwańczym nożownikiem, a od czasu do czasu w domu coś przy nim wybucha. Normalny dzień.<br><br>Jestem też pracoholikiem. Dla Cogito mogę pracować zawsze, wszędzie i prawdopodobnie nawet pod peleryną niewidką.<br><br>Samuraj. Potterhead. Psiarz. Pracoholik. Człowiek, którego życie próbowało pokonać, ale najwyraźniej źle trafiło."
  },
  {
    "name": "Raś Marcin",
    "description": "Jestem Marcin.<br>Mięśnie robię na siłowni,<br>styl robię za wypłatę,<br>a formę utrzymuję dzięki temu,<br>że za długo patrzę w lustro.<br>Kobiece kształty?<br>Oczywiście, że zauważam. Mam przecież wzrok.<br>Drogie ciuchy, duże ciężary<br>i ego, którego nie da się zmierzyć nawet suwmiarką.<br>Marcin — człowiek wielu talentów.<br>Największy talent? Bycie Marcinem.<br>"
  },
  {
    "name": "Ryducha Mateusz",
    "description": ""
  },
  {
    "name": "Słowik Sebastian",
    "description": ""
  },
  {
    "name": "Szombara Mikołaj",
    "description": ""
  },
  {
    "name": "Szef",
    "description": ""
  },
  {
    "name": "Szumiński Bartek",
    "description": ""
  },
  {
    "name": "Zebrucki Krzysiek",
    "description": "Jeśli masz problem z szybą — Krzysiu prawdopodobnie już wie, o którą dokładnie chodzi, jaki ma numer, gdzie jest, skąd przyjechała i dokąd ma pojechać. A jeśli nie wie, to znaczy, że ktoś podał mu zły numer. <br> <br>Szybiarz z zawodu, culé z wyboru i spacerowicz z potrzeby ucieczki od magazynu. 🔵🔴 <br> <br>Niektórzy po ciężkim dniu marzą o urlopie. Krzysiu marzy o tym, żeby znaleźć się na Camp Nou, usiąść na trybunach i przez 90 minut nie usłyszeć ani słowa o dostawie, szybie, numerze zamówienia ani — co najważniejsze — „Krzysiu, a wiesz może…?” <br> <br>Bo jeśli Barça gra, Krzysiu ma ważniejsze rzeczy na głowie. A jeśli Barça nie gra, to też ma ważniejsze rzeczy na głowie."
  },
  {
    "name": "Żyła Krzysiek",
    "description": ""
  },
  {
    "name": "Dras Klaudiusz",
    "description": "Cześć, jestem Klaudiusz! 👋 <br> <br>Pracuję na dziale dostaw, gdzie zajmuję się rozkładaniem towarów na regały i pilnowaniem, żeby wszystko było na swoim miejscu. 📦 <br> <br>Do pracy przyjeżdżam na skuterze 🛵 – dzięki temu zawsze jestem gotowy do działania! Lubię pomagać i można na mnie liczyć. <br> <br>Dbam też o to, żeby paczki dotarły do klientów w całości. A ponieważ nie lubię marnować materiałów, stare kartony przerabiam na wypełniacze. ♻️📦 <br> <br>Można więc powiedzieć, że układam, zabezpieczam, pomagam i daję kartonom drugie życie! 😄"
  },
  {
    "name": "Herman Arek",
    "description": "Arek – człowiek od zadań specjalnych! 💪📦<br><br>Na co dzień rządzi na magazynie na dziale eksport, gdzie wysyła paczki w najdalsze zakątki świata i załatwia rzeczy, których podobno „nie da się załatwić”. 😎<br><br>Dla handlowców jest niczym numer alarmowy – „Areczku, pomożesz?” i już wiadomo, że sprawa jest w dobrych rękach. 😉 <br><br>Po pracy też nie zwalnia – lubi sport, bieganie i podnoszenie ciężarów. 🏃‍♂️🏋️ Wszechstronny, pomocny, zawsze uśmiechnięty i bardzo miły. Krótko mówiąc: jeśli czegoś nie da się ogarnąć, zadzwoń do Arka. A jeśli Arek nie odbiera… to znaczy, że właśnie coś ogarnia."
  },
  {
    "name": "Kapica Kacper",
    "description": "Jestem Kacper. Jestem człowiekiem, który zawsze znajdzie czas, żeby komuś pomóc. <br><br>Zbieranie, pakowanie, ogarnianie — właściwie nie ma znaczenia, co trzeba zrobić, jakoś się tym zajmę. Mam też bardzo przydatną umiejętność: nie potrafię powiedzieć „nie”."
  },
  {
    "name": "Misztal Tomek",
    "description": "Cześć, jestem Tomek. <br><br>Na co dzień pracuję na dostawie, ale tak naprawdę nigdy nie wiadomo, czym będę zajmował się za pięć minut. Raz wydaję towar, raz koszę trawę, innym razem zostaję po godzinach, a jak trzeba, to nawet zastąpię kierownika dostawy. Zakres obowiązków? Brak. Podobno jestem głośny. Ja po prostu lubię, kiedy wszyscy wiedzą, że jestem. Czasami chodzę i krzyczę losowe rzeczy, więc jeśli usłyszysz coś dziwnego — spokojnie, to prawdopodobnie tylko ja. <br><br>Nieprzewidywalny, wielozadaniowy i zawsze gotowy na kolejne losowe zadanie. Tomek Misztal — człowiek, któremu można powierzyć wszystko."
  },
  {
    "name": "Pakuła Tomek",
    "description": "Tomek — Kierownik Dostaw<br><br>Nie przyjechało. Nie wiem kiedy będzie przyjęte. I nie, nie przyspieszymy tego.<br><br>Jeśli nie jesteś Kariną, a mimo to udało Ci się zeskanować ten kod — jesteś zdecydowanie za blisko.<br><br>Tomek jest z nami tak długo, że prawdopodobnie pamięta czasy, kiedy dostawy przychodziły na czas. Kieruje działem dostaw, więc wie, gdzie wszystko jest… nawet jeśli aktualnie twierdzi, że nie wie.<br><br>Dostawę może przyjąć wcześniej. Pytanie tylko, czy chce. 😉"
  },
  {
    "name": "Szczupak Piotr",
    "description": "Cześć, jestem Szczupak.<br><br> Mam ponad dwa metry wzrostu, więc na magazynie robię za sprzęt do ściągania towaru z najwyższych regałów. Wózek widłowy też ogarniam, więc jak coś jest za wysoko albo za ciężkie, wiadomo, kogo wołać. <br><br>Poza tym lubię sobie pomarudzić, dużo gram, słucham metalu i czekam na swoją wymarzoną Hondę Civic. Jak trzeba coś zrobić — zrobię."
  },
  {
    "name": "Zalewski Mateusz",
    "description": "Cześć, jestem Mati. <br><br>Pracuję na szybach i zajmuję się zamówieniami, które wysyłam później na cały świat. Jak dostanę WZ-ki, zaczyna się zabawa — szukanie, pakowanie, wkładanie dużych i ciężkich szyb do skrzyń i można wysyłać. Większość dnia spędzam na dziale szyb, gdzieś między regałami. Jak ktoś mnie szuka, to właśnie tam. Jestem miły, ale raczej zabiegany. Mam trochę tych Rabenów do ogarnięcia. <br><br>Po pracy lubię samochody. Sam jeżdżę niebieskim Seicento, które czasami odpala, a czasami daje mi chwilę na przemyślenie życia."
  },
  {
    "name": "Żuchora Piotr",
    "description": "Pjoter — na magazynie pozbiera wszystko. Sworznie, szyby, lemiesze — co trzeba, to znajdzie i pozbiera. Tylko zanim to zrobi, dokładnie Ci wyjaśni, dlaczego właśnie teraz absolutnie nie ma na to czasu. <br><br>Do pracy codziennie przyjeżdża rowerem. I trzeba przyznać — jeździ odważnie. Na tyle odważnie, że kiedyś postanowił wjechać rowerem w samochód. Samochód przeżył. Rower też. Pjoter również. Od tamtej pory najwyraźniej uznał, że przewracanie się to jedna z jego życiowych specjalizacji.<br><br>Prawdopodobnie jedyny człowiek na świecie, który przeszedł drogę od trzech gainerów dziennie i budowania masy do jedzenia samych warzyw. <br>"
  }
];
