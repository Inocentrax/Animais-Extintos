let dados = [
    {
        titulo: "Dodô",
        descricao: "O Dodô era uma ave não voadora endêmica das Ilhas Maurício, extinta no final do século XVII devido à caça excessiva e à introdução de espécies invasoras pelos humanos. Sua extinção tornou-se um símbolo dos perigos da atividade humana sobre os ecossistemas.",
        link: "https://pt.wikipedia.org/wiki/Dod%C3%B4",
        tags: "ave extinta Dodô Ilhas Maurício extinção dodo"
    },
    {
        titulo: "Tigre da Tasmânia",
        descricao: "O Tigre da Tasmânia, também conhecido como Tilacino, era um marsupial carnívoro nativo da Austrália, Tasmânia e Nova Guiné. Declarado extinto no século XX, sua extinção foi causada pela caça, destruição de habitat e competição com espécies introduzidas.",
        link: "https://pt.wikipedia.org/wiki/Tigre-da-Tasm%C3%A2nia",
        tags: "marsupial extinto Tigre da Tasmânia Tilacino extinção"
    },
    {
        titulo: "Mamute-lanoso",
        descricao: "O Mamute-lanoso era uma espécie de mamute que habitava as regiões frias do hemisfério norte durante o Pleistoceno. Extinto há cerca de 4.000 anos, sua extinção foi influenciada tanto pelas mudanças climáticas quanto pela caça feita pelos humanos.",
        link: "https://pt.wikipedia.org/wiki/Mamute-lanoso",
        tags: "mamute extinto lanoso Pleistoceno extinção"
    },
    {
        titulo: "Pássaro Moa",
        descricao: "O Moa era um grupo de aves não voadoras nativas da Nova Zelândia, extintas no século XV devido à caça pelos humanos e à destruição de seu habitat. Essas aves gigantes podiam atingir até 3 metros de altura e seu desaparecimento teve grande impacto na fauna local.",
        link: "https://pt.wikipedia.org/wiki/Moa",
        tags: "ave extinta Moa Nova Zelândia extinção"
    },
    {
        titulo: "Rinoceronte-lanudo",
        descricao: "O Rinoceronte-lanudo era um grande mamífero que habitava as planícies da Europa e da Ásia durante o Pleistoceno. Foi extinto há cerca de 10.000 anos, provavelmente devido à combinação de mudanças climáticas e caça humana.",
        link: "https://pt.wikipedia.org/wiki/Rinoceronte-lanudo",
        tags: "rinoceronte extinto lanudo Pleistoceno extinção"
    },
    {
        titulo: "Auroque",
        descricao: "O Auroque era uma espécie de bovino selvagem que habitava a Europa, Ásia e Norte da África. Extinto em 1627, ele é considerado o ancestral do gado doméstico moderno. Sua extinção foi causada pela caça intensiva e pela perda de habitat.",
        link: "https://pt.wikipedia.org/wiki/Auroque",
        tags: "bovino extinto Auroque Europa extinção"
    },
    {
        titulo: "Quagga",
        descricao: "O Quagga era uma subespécie da zebra-das-planícies que habitava a África do Sul. Ele foi extinto no final do século XIX devido à caça excessiva. Era caracterizado por listras na parte da frente do corpo, com a parte traseira sendo de cor marrom.",
        link: "https://pt.wikipedia.org/wiki/Quagga",
        tags: "zebra extinta Quagga África do Sul extinção"
    },
    {
        titulo: "Pombo-passageiro",
        descricao: "O Pombo-passageiro era uma ave nativa da América do Norte que se extinguiu no início do século XX devido à caça em massa e à destruição de seu habitat. Antes de sua extinção, era uma das aves mais abundantes do continente.",
        link: "https://pt.wikipedia.org/wiki/Pombo-passageiro",
        tags: "ave extinta Pombo-passageiro América do Norte extinção"
    },
    {
        titulo: "Lobo-do-falkland",
        descricao: "O Lobo-do-falkland, também conhecido como warrah, era um canídeo endêmico das Ilhas Malvinas. Foi caçado até a extinção no século XIX, tornando-se o único mamífero terrestre nativo das ilhas a desaparecer devido à ação humana.",
        link: "https://pt.wikipedia.org/wiki/Lobo-do-Falkland",
        tags: "lobo extinto Ilhas Malvinas extinção"
    },
    {
        titulo: "Tilacino",
        descricao: "O Tilacino, também conhecido como Tigre-da-Tasmânia, era um grande marsupial carnívoro nativo da Austrália e Tasmânia. Foi declarado extinto no século XX devido à caça intensa e à destruição de seu habitat.",
        link: "https://pt.wikipedia.org/wiki/Tilacino",
        tags: "marsupial extinto Tilacino Tigre-da-Tasmânia extinção"
    },
    {
        titulo: "Gazela da Arábia",
        descricao: "A Gazela da Arábia era uma espécie de antílope que habitava a Península Arábica. Foi extinta na natureza no século XX devido à caça indiscriminada, mas esforços de conservação estão tentando reintroduzi-la em seu habitat natural.",
        link: "https://pt.wikipedia.org/wiki/Gazela-da-Arábia",
        tags: "gazela extinta Península Arábica extinção"
    },
    {
        titulo: "Grande Auk",
        descricao: "O Grande Auk era uma ave marinha não voadora que habitava o Atlântico Norte. Ele foi caçado até a extinção no século XIX por suas penas, carne e óleo, com o último registro de sua existência em 1844.",
        link: "https://pt.wikipedia.org/wiki/Grande_auk",
        tags: "ave extinta Grande Auk Atlântico Norte extinção"
    },
    {
        titulo: "Megalodon",
        descricao: "O Megalodon era um gigantesco tubarão que habitava os oceanos há cerca de 23 a 3,6 milhões de anos. Com até 18 metros de comprimento, ele foi o maior tubarão que já existiu, mas foi extinto provavelmente devido às mudanças climáticas e à diminuição de presas disponíveis.",
        link: "https://pt.wikipedia.org/wiki/Megalodon",
        tags: "tubarão extinto Megalodon oceano extinção"
    },
    {
        titulo: "Tartaruga-gigante-de-Pinta",
        descricao: "A Tartaruga-gigante-de-Pinta, também conhecida como George Solitário, era uma subespécie de tartaruga-das-galápagos. Sua extinção foi confirmada em 2012 com a morte de George, o último de sua espécie.",
        link: "https://pt.wikipedia.org/wiki/Tartaruga-gigante-de-Pinta",
        tags: "tartaruga extinta Pinta Galápagos George Solitário extinção"
    },
    {
        titulo: "Arothron mappa",
        descricao: "O Arothron mappa, ou Peixe-baiacu, era uma espécie de peixe venenoso que habitava os recifes de coral. Acredita-se que ele tenha sido extinto devido à pesca excessiva e à degradação dos recifes, seu habitat natural.",
        link: "https://pt.wikipedia.org/wiki/Arothron_mappa",
        tags: "peixe extinto baiacu recifes coral extinção"
    },
    {
        titulo: "Lobo-do-Japão",
        descricao: "O Lobo-do-Japão, ou Lobo Honshu, era uma subespécie de lobo que habitava as ilhas japonesas. Ele foi extinto no início do século XX devido à caça e doenças introduzidas pelos cães domésticos.",
        link: "https://pt.wikipedia.org/wiki/Lobo-do-Jap%C3%A3o",
        tags: "lobo extinto Japão Honshu extinção"
    },
    {
        titulo: "Sapo Dourado",
        descricao: "O Sapo Dourado era uma espécie de anfíbio que habitava as florestas tropicais da Costa Rica. Foi declarado extinto na década de 1980 devido às mudanças climáticas e à destruição de seu habitat.",
        link: "https://pt.wikipedia.org/wiki/Sapo_dourado",
        tags: "anfíbio extinto Sapo Dourado Costa Rica extinção"
    },
    {
        titulo: "Macrauquênias",
        descricao: "As Macrauquênias eram grandes mamíferos herbívoros que viveram na América do Sul durante o Pleistoceno. Elas foram extintas há cerca de 10.000 anos, provavelmente devido à caça humana e às mudanças ambientais.",
        link: "https://pt.wikipedia.org/wiki/Macrauqu%C3%A9nia",
        tags: "mamífero extinto Macrauquênias América do Sul Pleistoceno extinção"
    },
    {
        titulo: "Leão-do-atlas",
        descricao: "O Leão-do-atlas, também conhecido como Leão-da-barbária, era uma subespécie de leão que habitava as regiões montanhosas do norte da África. Ele foi caçado até a extinção na natureza no início do século XX.",
        link: "https://pt.wikipedia.org/wiki/Le%C3%A3o-do-Atlas",
        tags: "leão extinto Leão-do-atlas África extinção"
    },
    {
        titulo: "Pika de Ili",
        descricao: "A Pika de Ili era uma espécie de mamífero que vivia nas montanhas Tian Shan, na China. Sua extinção foi causada pela perda de habitat devido ao aquecimento global e à intervenção humana em seu território.",
        link: "https://pt.wikipedia.org/wiki/Pika",
        tags: "mamífero extinto Pika de Ili China extinção"
    },
    {
        titulo: "Gorila-do-rios-ocidentais",
        descricao: "O Gorila-do-rios-ocidentais era uma subespécie de gorila nativo das florestas tropicais da África Central. Ele foi extinto no início do século XXI devido à caça furtiva e à destruição de seu habitat.",
        link: "https://pt.wikipedia.org/wiki/Gorila-dos-rios-ocidentais",
        tags: "gorila extinto África Central extinção"
    },
    {
        titulo: "Lobo-das-malvinas",
        descricao: "O Lobo-das-malvinas, também conhecido como warrah, era o único mamífero terrestre das Ilhas Malvinas. Foi extinto no século XIX devido à caça excessiva pelos colonos que chegaram às ilhas.",
        link: "https://pt.wikipedia.org/wiki/Lobo-das-malvinas",
        tags: "lobo extinto Malvinas extinção"
    },
    {
        titulo: "Auroque",
        descricao: "O Auroque era um bovino selvagem que habitava a Europa, Ásia e Norte da África. Foi o ancestral direto do gado doméstico moderno e foi extinto no século XVII devido à caça e à perda de habitat.",
        link: "https://pt.wikipedia.org/wiki/Auroque",
        tags: "bovino extinto Auroque Europa extinção"
    },
    {
        titulo: "Alca-gigante",
        descricao: "A Alca-gigante era uma ave marinha não voadora nativa do Atlântico Norte. Ela foi caçada até a extinção no século XIX, principalmente por suas penas, carne e óleo, com os últimos registros de sua existência em 1844.",
        link: "https://pt.wikipedia.org/wiki/Alca-gigante",
        tags: "ave extinta Alca-gigante Atlântico Norte extinção"
    },
    {
        titulo: "Tigre-do-Cáspio",
        descricao: "O Tigre-do-Cáspio era uma subespécie de tigre que habitava as regiões ao redor do Mar Cáspio. Foi extinto na década de 1970 devido à caça e à destruição de seu habitat para a agricultura.",
        link: "https://pt.wikipedia.org/wiki/Tigre-do-Cáspio",
        tags: "tigre extinto Cáspio Ásia extinção"
    },
    {
        titulo: "Bubalino-do-norte-da-África",
        descricao: "O Bubalino-do-norte-da-África era uma subespécie de antílope que habitava o norte da África. Ele foi extinto no final do século XIX devido à caça excessiva e à destruição de seu habitat natural.",
        link: "https://pt.wikipedia.org/wiki/Bubalino-do-norte-da-%C3%81frica",
        tags: "antílope extinto África extinção"
    },
    {
        titulo: "Foca-monge-do-caribe",
        descricao: "A Foca-monge-do-caribe era uma espécie de foca que habitava o mar do Caribe. Ela foi caçada até a extinção no início do século XX, principalmente por sua gordura, usada para óleo.",
        link: "https://pt.wikipedia.org/wiki/Foca-monge-do-caribe",
        tags: "foca extinta Caribe extinção"
    },
    {
        titulo: "Pika-do-Ladakh",
        descricao: "A Pika-do-Ladakh era uma pequena espécie de mamífero que habitava as áreas montanhosas do Himalaia, especificamente na região de Ladakh. Sua extinção foi causada pela degradação de seu habitat devido às mudanças climáticas.",
        link: "https://pt.wikipedia.org/wiki/Ochotona_ladacensis",
        tags: "mamífero extinto Pika Ladakh Himalaia extinção"
    },
    {
        titulo: "Pinguim-gigante",
        descricao: "O Pinguim-gigante era uma espécie de ave marinha não voadora que viveu na Nova Zelândia durante o período Paleoceno. Foi extinto há milhões de anos devido a mudanças nos ecossistemas e competição com outras espécies.",
        link: "https://pt.wikipedia.org/wiki/Pinguim_gigante",
        tags: "pinguim extinto Nova Zelândia Paleoceno extinção"
    },
    {
        titulo: "Cabra-dos-pirenéus",
        descricao: "A Cabra-dos-pirenéus era uma subespécie de cabra selvagem que habitava as montanhas dos Pirenéus. Foi declarada extinta no ano 2000, sendo a primeira espécie a ser extinta no novo milênio.",
        link: "https://pt.wikipedia.org/wiki/Cabra-dos-piren%C3%A9us",
        tags: "cabra extinta Pirenéus extinção"
    },
    {
        titulo: "Rinoceronte-negro-ocidental",
        descricao: "O Rinoceronte-negro-ocidental era uma subespécie do rinoceronte-negro, nativo das savanas da África Central. Ele foi declarado extinto em 2011 devido à caça ilegal e à perda de habitat.",
        link: "https://pt.wikipedia.org/wiki/Rinoceronte-negro-ocidental",
        tags: "rinoceronte extinto África extinção"
    },
    {
        titulo: "Tartaruga-das-galápagos-de-floreana",
        descricao: "A Tartaruga-das-galápagos-de-floreana era uma espécie de tartaruga gigante que vivia na Ilha Floreana, nas Galápagos. Foi extinta no século XIX devido à caça pelos humanos e à introdução de espécies invasoras.",
        link: "https://pt.wikipedia.org/wiki/Tartaruga-das-gal%C3%A1pagos",
        tags: "tartaruga extinta Galápagos Floreana extinção"
    },
    {
        titulo: "Pato-de-madagascar",
        descricao: "O Pato-de-madagascar era uma espécie de pato nativa das áreas de pântano de Madagascar. Sua extinção foi causada pela destruição de seu habitat e pela caça excessiva.",
        link: "https://pt.wikipedia.org/wiki/Pato-de-Madagascar",
        tags: "pato extinto Madagascar extinção"
    },
    {
        titulo: "Tigre-de-bali",
        descricao: "O Tigre-de-bali era uma subespécie de tigre nativa da ilha de Bali, na Indonésia. Foi extinto na década de 1930 devido à caça e à perda de habitat causado pelo desmatamento na ilha.",
        link: "https://pt.wikipedia.org/wiki/Tigre-de-bali",
        tags: "tigre extinto Bali Indonésia extinção"
    },
    {
        titulo: "Pombo-de-maurício",
        descricao: "O Pombo-de-maurício, também conhecido como Pigeon de Maurice, era uma ave nativa das Ilhas Maurício. Foi extinto no século XVII devido à caça excessiva e à introdução de predadores.",
        link: "https://pt.wikipedia.org/wiki/Pombo-de-maur%C3%ADcio",
        tags: "pombo extinto Maurício ave extinção"
    },
    {
        titulo: "Tigre-javanês",
        descricao: "O Tigre-javanês era uma subespécie de tigre que habitava a ilha de Java, na Indonésia. Foi extinto nos anos 1970 devido à caça e à destruição do seu habitat por atividades humanas.",
        link: "https://pt.wikipedia.org/wiki/Tigre-javan%C3%AAs",
        tags: "tigre extinto Java Indonésia extinção"
    },
    {
        titulo: "Pterossauro",
        descricao: "Os Pterossauros eram répteis voadores que dominaram os céus durante a era dos dinossauros, no período Mesozoico. Eles variavam em tamanho e eram os primeiros vertebrados conhecidos a desenvolverem a habilidade de voo.",
        link: "https://pt.wikipedia.org/wiki/Pterossauro",
        tags: "réptil extinto voador Pterossauro dinossauro extinção"
    },
    {
        titulo: "Elasmosauro",
        descricao: "O Elasmosauro era um réptil marinho de pescoço longo que habitou os oceanos no período Cretáceo. Ele usava seu pescoço longo para capturar peixes e outros animais marinhos. Foi extinto junto com os dinossauros há cerca de 65 milhões de anos.",
        link: "https://pt.wikipedia.org/wiki/Elasmosauro",
        tags: "réptil extinto aquático Elasmosauro marinho extinção"
    },
    {
        titulo: "Titanoboa",
        descricao: "A Titanoboa era uma cobra gigante que viveu durante o período Paleoceno, cerca de 60 milhões de anos atrás. Ela podia atingir até 13 metros de comprimento, e habitava regiões pantanosas e florestas tropicais da América do Sul.",
        link: "https://pt.wikipedia.org/wiki/Titanoboa",
        tags: "cobra extinta rastejante Titanoboa Paleoceno extinção"
    }, {
        titulo: "Ictiossauro",
        descricao: "O Ictiossauro era um réptil marinho que viveu durante o período Triássico e Jurássico. Ele tinha uma forma semelhante à dos golfinhos modernos e era adaptado à vida nos oceanos, alimentando-se de peixes e lulas. Foi extinto há cerca de 90 milhões de anos.",
        link: "https://pt.wikipedia.org/wiki/Ictiossauro",
        tags: "réptil extinto marinho Ictiossauro aquático extinção"
    },
    {
        titulo: "Aepyornis",
        descricao: "O Aepyornis, também conhecido como 'pássaro-elefante', era uma ave terrestre gigante que habitava Madagascar. Extinta no século XVII, essa ave não voadora podia atingir até 3 metros de altura e foi provavelmente extinta devido à caça e à destruição de habitat.",
        link: "https://pt.wikipedia.org/wiki/Aepyornis",
        tags: "ave extinta terrestre Aepyornis Madagascar extinção"
    },
    {
        titulo: "Archelon",
        descricao: "A Archelon era uma tartaruga marinha gigante que viveu durante o período Cretáceo. Com um comprimento de até 4 metros, ela é uma das maiores tartarugas marinhas que já existiu. Sua extinção ocorreu há cerca de 65 milhões de anos, junto com os dinossauros.",
        link: "https://pt.wikipedia.org/wiki/Archelon",
        tags: "tartaruga extinta aquático Archelon Cretáceo extinção"
    },
    {
        titulo: "Meganeura",
        descricao: "A Meganeura era uma libélula gigante que viveu durante o período Carbonífero, cerca de 300 milhões de anos atrás. Com uma envergadura de asas de até 70 centímetros, era um dos maiores insetos voadores conhecidos. Foi extinta devido às mudanças climáticas e à queda nos níveis de oxigênio.",
        link: "https://pt.wikipedia.org/wiki/Meganeura",
        tags: "inseto extinto voador Meganeura Carbonífero extinção"
    },
    {
        titulo: "Sarcosuchus",
        descricao: "O Sarcosuchus, também conhecido como 'Supercroc', era um enorme crocodilo pré-histórico que viveu no período Cretáceo. Ele habitava regiões fluviais e pantanosas da África e América do Sul, e podia atingir até 12 metros de comprimento.",
        link: "https://pt.wikipedia.org/wiki/Sarcosuchus",
        tags: "réptil extinto rastejante Sarcosuchus Cretáceo extinção"
    },
    {
        titulo: "Basilossauro",
        descricao: "O Basilossauro era um grande mamífero marinho que viveu há cerca de 40 milhões de anos, durante o Eoceno. Apesar do nome, não era um réptil, mas um ancestral das baleias modernas. Ele habitava mares rasos e costeiros, alimentando-se de peixes.",
        link: "https://pt.wikipedia.org/wiki/Basilossauro",
        tags: "mamífero extinto aquático Basilossauro Eoceno extinção"
    },
    {
        titulo: "Quetzalcoatlus",
        descricao: "O Quetzalcoatlus era um dos maiores pterossauros voadores que já existiram, com uma envergadura de asas de até 10 a 12 metros. Ele viveu no final do período Cretáceo e provavelmente caçava pequenos animais ou se alimentava de carniça.",
        link: "https://pt.wikipedia.org/wiki/Quetzalcoatlus",
        tags: "réptil extinto voador Quetzalcoatlus Cretáceo extinção"
    },
    {
        titulo: "Dunkleosteus",
        descricao: "O Dunkleosteus era um peixe placodermo pré-histórico que viveu durante o período Devoniano. Ele tinha uma armadura óssea em sua cabeça e mandíbulas poderosas, podendo atingir até 10 metros de comprimento. Era um predador de topos nos oceanos da época.",
        link: "https://pt.wikipedia.org/wiki/Dunkleosteus",
        tags: "peixe extinto aquático Dunkleosteus Devoniano extinção"
    },
    {
        titulo: "Mastodonte",
        descricao: "O Mastodonte era um grande mamífero herbívoro que habitava florestas e áreas pantanosas da América do Norte durante o Pleistoceno. Similar aos elefantes modernos, foi extinto há cerca de 10.000 anos devido à caça humana e às mudanças climáticas.",
        link: "https://pt.wikipedia.org/wiki/Mastodonte",
        tags: "mamífero extinto terrestre Mastodonte Pleistoceno extinção"
    },
    {
        titulo: "Phorusrhacidae",
        descricao: "Os Phorusrhacidae, também conhecidos como 'aves do terror', eram aves predadoras gigantes que viveram na América do Sul durante o período Paleogeno. Essas aves eram rápidas e caçavam pequenos mamíferos, sendo incapazes de voar.",
        link: "https://pt.wikipedia.org/wiki/Phorusrhacidae",
        tags: "ave extinta terrestre Phorusrhacidae Paleogeno extinção"
    },
    {
        titulo: "Liopleurodon",
        descricao: "O Liopleurodon era um réptil marinho carnívoro que viveu durante o período Jurássico. Ele podia atingir até 7 metros de comprimento e era um dos principais predadores dos mares da época.",
        link: "https://pt.wikipedia.org/wiki/Liopleurodon",
        tags: "réptil extinto aquático Liopleurodon Jurássico extinção"
    },
    {
        titulo: "Arthropleura",
        descricao: "A Arthropleura era um artrópode gigante que viveu no final do período Carbonífero, cerca de 300 milhões de anos atrás. Com até 2,5 metros de comprimento, este invertebrado rastejante era um dos maiores artrópodes terrestres conhecidos.",
        link: "https://pt.wikipedia.org/wiki/Arthropleura",
        tags: "artrópode extinto rastejante Arthropleura Carbonífero extinção"
    },
    {
        titulo: "Moa",
        descricao: "O Moa era uma grande ave não voadora nativa da Nova Zelândia, extinta no século XV devido à caça excessiva pelos primeiros humanos que chegaram à região. Essas aves podiam atingir até 3,6 metros de altura, sendo algumas das maiores aves que já existiram.",
        link: "https://pt.wikipedia.org/wiki/Moa",
        tags: "ave extinta terrestre Moa Nova Zelândia extinção"
    },
    {
        titulo: "Megalodon",
        descricao: "O Megalodon era um gigantesco tubarão que habitava os oceanos há cerca de 23 a 3,6 milhões de anos. Com até 18 metros de comprimento, foi o maior tubarão que já existiu. Acredita-se que ele tenha sido extinto devido a mudanças climáticas e à falta de presas.",
        link: "https://pt.wikipedia.org/wiki/Megalodon",
        tags: "peixe extinto aquático Megalodon oceano extinção"
    },
    {
        titulo: "Velociraptor",
        descricao: "O Velociraptor era um dinossauro carnívoro que viveu no período Cretáceo, cerca de 75 milhões de anos atrás. Este predador ágil e veloz caçava em grupos e é conhecido por seu papel de destaque na cultura popular como um dos dinossauros mais perigosos.",
        link: "https://pt.wikipedia.org/wiki/Velociraptor",
        tags: "dinossauro extinto terrestre Velociraptor Cretáceo extinção"
    },
    {
        titulo: "Glyptodon",
        descricao: "O Glyptodon era um grande mamífero terrestre coberto por uma carapaça semelhante à dos tatus modernos. Ele viveu durante o Pleistoceno na América do Sul e se extinguiu há cerca de 10.000 anos, possivelmente devido à caça humana.",
        link: "https://pt.wikipedia.org/wiki/Glyptodon",
        tags: "mamífero extinto terrestre Glyptodon Pleistoceno extinção"
    },
    {
        titulo: "Helicoprion",
        descricao: "O Helicoprion era um peixe cartilaginoso que viveu nos oceanos durante o período Permiano, há cerca de 290 milhões de anos. Ele é famoso por sua mandíbula em espiral, que funcionava como uma serra para capturar presas marinhas.",
        link: "https://pt.wikipedia.org/wiki/Helicoprion",
        tags: "peixe extinto aquático Helicoprion Permiano extinção"
    },
    {
        titulo: "Diplocaulus",
        descricao: "O Diplocaulus era um anfíbio pré-histórico com uma forma de cabeça em 'boomerang', que viveu durante o período Permiano. Ele habitava pântanos e rios da América do Norte, se alimentando de peixes e outros pequenos animais aquáticos.",
        link: "https://pt.wikipedia.org/wiki/Diplocaulus",
        tags: "anfíbio extinto aquático Diplocaulus Permiano extinção"
    }
];
