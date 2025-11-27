// Все ссылки проекта в одном месте — меняешь здесь
const LINKS = {
  telegram: "https://t.me/your_channel_here",
  buy: "https://dedust.io", // сюда потом вставишь ссылку на пару с токеном
};

// Тексты EN / RU
const TEXTS = {
  en: {
    nav: {
      brandTitle: "Telegram Usernames Strategy",
      brandPill: "$USERSTR",
      brandSub: "Real-yield model from Telegram usernames market",
      linkHow: "How it works",
      linkNumbers: "Numbers",
      linkTokenomics: "Tokenomics",
      linkFaq: "FAQ",
      btnTelegram: "Join Telegram",
      btnBuy: "Buy $USERSTR",
    },
    hero: {
      badge: "Real yield",
      badgeText: "Backed by scarcity of Telegram usernames",
      title: {
        before: "A token powered by",
        highlight: "Telegram usernames scarcity",
        after: "",
      },
      subtitle: `
        <strong>$USERSTR</strong> is not just another meme coin.
        Treasury hunts rare and underpriced Telegram usernames, lists them with a <strong>25% markup</strong>,
        and routes net profit into <strong>buyback & burn</strong> of the token.
      `,
      btnBuy: "Buy $USERSTR",
      btnHow: "How the model works",
      notePill: "Scarcity & buyback loop",
      noteText: "Every usernames deal creates additional pressure on $USERSTR supply.",
      metrics: [
        {
          label: "Telegram usernames volume (30d)",
          value: "3.9M TON",
          helper: "On-chain, verifiable",
        },
        {
          label: "Target share of the market",
          value: "0.5–1%",
          helper: "Even a slice is huge",
        },
        {
          label: "Profit to buyback",
          value: "100%",
          helper: "Net profit → $USERSTR",
        },
      ],
      rightCard: {
        label: "Usernames trading loop",
        tag: "On-chain & transparent",
        graphTitle: "$USERSTR flywheel",
        graphCaption: "Username treasury performance (schematic)",
        graphPill: "Compounding scarcity",
        graphFooterLeft: "Fragment & Getgems flow →",
        graphFooterRight: "TON → usernames → profit → $USERSTR",
        loopTitle: "Usernames strategy loop",
        loopSteps: [
          { left: "Buy on Fragment / Getgems", right: "undervalued names" },
          { left: "List with +25% markup", right: "market exit" },
          { left: "Route profit to buyback", right: "upward pressure" },
          { left: "Burn $USERSTR", right: "shrinking supply" },
        ],
        signalsTitle: "Signals we track",
        signals: [
          { left: "7d / 30d volumes", right: "Fragment / Getgems" },
          { left: "Floor price shifts", right: "rare segments" },
          { left: "Whale activity", right: "kits & bulk buyers" },
        ],
        disclaimer: "*Illustrative model, all txs are on-chain and verifiable.",
      },
    },
    how: {
      kicker: "Mechanics",
      title: "How Telegram Usernames Strategy works",
      subtitle:
        "The token is directly tied to the real on-chain market of Telegram usernames. Every trading cycle feeds the treasury and buyback.",
      steps: [
        {
          title: "Fees form the treasury",
          body:
            "Every buy and sell of $USERSTR includes a small fee. A major part of this fee goes into the on-chain treasury dedicated to usernames operations.",
          label: "More volume = more fuel in treasury.",
        },
        {
          title: "We snipe & relist usernames",
          body:
            "Treasury acquires underpriced or rare usernames on Fragment and Getgems, then relists them with roughly a 25% markup, focusing on liquidity and demand.",
          label: "Strategy focuses on real trading, not paper yield.",
        },
        {
          title: "Profit → buyback & burn",
          body:
            "Net profit from usernames trading is routed into buying $USERSTR on the market and burning it. The more usernames we flip, the more supply is removed.",
          label: "Trading flow becomes structural buy pressure.",
        },
      ],
    },
    numbers: {
      kicker: "On-chain numbers",
      title: "Market, flow & tokenomics",
      subtitle:
        "All the core metrics come from open, verifiable marketplace and TON analytics — nothing is hidden, everything is traceable.",
      market: {
        title: "Usernames market snapshot",
        text:
          "Based on open stats, Telegram usernames generate around <strong>3.9M TON</strong> volume over 30 days. Capturing even <strong>0.5–1%</strong> of that flow is already a massive source of buyback fuel.",
        pills: [
          { text: "Fragment / Getgems volumes", variant: "green" },
          { text: "Transparent on-chain data", variant: "purple" },
        ],
      },
    },
    tokenomics: {
      title: "Tokenomics of $USERSTR (concept)",
      text:
        "Instead of inflation and endless emissions, the model focuses on compressing supply via regular buyback & burn streamed from usernames trading profit.",
      items: [
        { label: "Treasury usage", value: "100% → usernames", progress: 100 },
        { label: "Usernames markup", value: "+25% base", progress: 78 },
        { label: "Profit destination", value: "Buyback & burn", progress: 96 },
        { label: "Narrative", value: "Scarcity powered by usernames", progress: 88 },
      ],
    },
    nfts: {
      kicker: "NFT grid",
      title: "Username NFTs we watch",
      subtitle:
        "Illustrative grid of usernames and collections that set the tempo. Cards reveal one by one to mirror how treasury snipes entries.",
      items: [
        { title: "@matrix", tag: "4L rare", note: "High floor, thin liquidity" },
        { title: "@future", tag: "premium", note: "Tracked by whales" },
        { title: "@alpha", tag: "greek", note: "Fast flips, steady demand" },
        { title: "@orbit", tag: "collection", note: "Bundled deal flow" },
        { title: "@storm", tag: "english", note: "Perfect for brand kits" },
        { title: "@quant", tag: "trader", note: "Data-driven narrative" },
      ],
    },
    faq: {
      kicker: "Clarity",
      title: "FAQ & common doubts",
      subtitle:
        "Skeptics are normal. The model is deliberately simple: buy cheaper, sell higher, route profit into buyback & burn.",
      items: [
        {
          q: "Why should this model work at all?",
          a:
            "Telegram usernames are already a live, active market with significant volume. We are not inventing a new economy — we plug into an existing, on-chain flow and direct part of it into $USERSTR buyback and burn.",
        },
        {
          q: "What if usernames volume goes down?",
          a:
            "Even with lower volumes, good names remain scarce — they don’t appear out of thin air. Strategy can adapt: focus on more liquid segments, deeper discounts on entry, more flexible markups on exit.",
        },
        {
          q: "Where can I verify treasury and trades?",
          a:
            "All transactions are on-chain. Treasury wallet, market links and usernames collections will be published openly, so any holder can track buys, listings and sales in real time.",
        },
        {
          q: "What is the role of a regular $USERSTR holder?",
          a:
            "Holding $USERSTR means being aligned with the strategy. The more usernames we trade and the more profit treasury generates, the stronger the buyback & burn stream that benefits holders.",
        },
      ],
    },
    cta: {
      title: "Ready to front-run the usernames meta?",
      subtitle:
        "Join the Telegram channel to track treasury activity, usernames flips and $USERSTR burns. The usernames market already exists — timing is the only question.",
      btnJoin: "Join Telegram channel",
      btnTrade: "Trade $USERSTR",
    },
    footer: {
      copy: "© Telegram Usernames Strategy · $USERSTR",
      linkHow: "Mechanics",
      linkTokenomics: "Tokenomics",
      linkFaq: "FAQ",
    },
  },

  ru: {
    nav: {
      brandTitle: "Telegram Usernames Strategy",
      brandPill: "$USERSTR",
      brandSub: "Модель реального дохода с рынка Telegram-юзернеймов",
      linkHow: "Как это работает",
      linkNumbers: "Цифры",
      linkTokenomics: "Токеномика",
      linkFaq: "FAQ",
      btnTelegram: "Перейти в Telegram",
      btnBuy: "Купить $USERSTR",
    },
    hero: {
      badge: "Real yield",
      badgeText: "Модель на дефиците Telegram-юзернеймов",
      title: {
        before: "Токен, запущенный на основе",
        highlight: "дефицита Telegram usernames",
        after: "",
      },
      subtitle: `
        <strong>$USERSTR</strong> — это не просто мем-токен.
        Казна выкупает редкие и недооценённые usernames Telegram, выставляет их с <strong>наценкой 25%</strong>,
        а чистую прибыль направляет в <strong>откуп и сжигание</strong> токена.
      `,
      btnBuy: "Купить $USERSTR",
      btnHow: "Как работает модель",
      notePill: "Scarcity & buyback loop",
      noteText: "Каждая сделка с usernames усиливает давление на предложение $USERSTR.",
      metrics: [
        {
          label: "Оборот usernames за 30 дней",
          value: "3.9M TON",
          helper: "Прозрачно и on-chain",
        },
        {
          label: "Целевая доля рынка",
          value: "0.5–1%",
          helper: "Даже доля даёт объём",
        },
        {
          label: "Поток в откуп",
          value: "100%",
          helper: "Чистый профит → $USERSTR",
        },
      ],
      rightCard: {
        label: "Кольцо торговли usernames",
        tag: "On-chain и прозрачно",
        graphTitle: "$USERSTR flywheel",
        graphCaption: "Работа казны usernames (схематично)",
        graphPill: "Нарастающий дефицит",
        graphFooterLeft: "Поток Fragment и Getgems →",
        graphFooterRight: "TON → usernames → профит → $USERSTR",
        loopTitle: "Цикл стратегии usernames",
        loopSteps: [
          { left: "Покупка на Fragment / Getgems", right: "недооценённые имена" },
          { left: "Листинг с наценкой ~25%", right: "рыночный выход" },
          { left: "Профит в откуп токена", right: "давление на цену" },
          { left: "Сжигание $USERSTR", right: "сжатие предложения" },
        ],
        signalsTitle: "За какими сигналами следим",
        signals: [
          { left: "Обороты за 7/30 дней", right: "Fragment / Getgems" },
          { left: "Сдвиги floor-цен", right: "редкие сегменты" },
          { left: "Активность китов", right: "киты и массовые покупки" },
        ],
        disclaimer: "*Схематическая модель, все транзакции on-chain и доступны для проверки.",
      },
    },
    how: {
      kicker: "Механика",
      title: "Как работает стратегия Telegram Usernames",
      subtitle:
        "Токен напрямую завязан на реальный рынок Telegram usernames: каждый торговый цикл подкрепляет казну и откуп токена.",
      steps: [
        {
          title: "Комиссии формируют казну",
          body:
            "С каждой покупки и продажи $USERSTR взимается комиссия. Существенная часть идёт в on-chain казну, которая работает с usernames.",
          label: "Больше объёма — больше топлива у казны.",
        },
        {
          title: "Снайп редких и дешёвых usernames",
          body:
            "Казна выкупает недооценённые или редкие usernames на Fragment и Getgems и перелистывает их с наценкой около 25%, с фокусом на ликвидность и спрос.",
          label: "Реальная торговля вместо бумажной доходности.",
        },
        {
          title: "Профит → откуп и сжигание",
          body:
            "Чистая прибыль с торговли usernames направляется на покупку $USERSTR на рынке и последующее сжигание. Чем активнее трейд — тем сильнее сжатие предложения.",
          label: "Торговый поток становится постоянным давлением на supply.",
        },
      ],
    },
    numbers: {
      kicker: "On-chain цифры",
      title: "Рынок, потоки и токеномика",
      subtitle:
        "Все ключевые цифры можно проверить по открытым маркетплейсам и аналитике TON — ничего скрытого, всё прозрачно.",
      market: {
        title: "Снимок рынка usernames",
        text:
          "По открытой статистике, оборот торговли Telegram usernames за 30 дней — около <strong>3.9M TON</strong>. Даже если стратегия займёт всего <strong>0.5–1%</strong> этого потока, это уже сотни тысяч TON объёма, подпитывающего откуп.",
        pills: [
          { text: "Fragment / Getgems объёмы", variant: "green" },
          { text: "Прозрачные on-chain данные", variant: "purple" },
        ],
      },
    },
    tokenomics: {
      title: "Токеномика $USERSTR (концепт)",
      text:
        "Модель делает ставку не на инфляцию и вечные эмиссии, а на сжатие предложения через регулярный buyback & burn из профита казны usernames.",
      items: [
        { label: "Использование казны", value: "100% → usernames", progress: 100 },
        { label: "Наценка на usernames", value: "от +25%", progress: 78 },
        { label: "Назначение профита", value: "Откуп и сжигание", progress: 96 },
        { label: "Нарратив", value: "Дефицит за счёт usernames", progress: 88 },
      ],
    },
    nfts: {
      kicker: "NFT сетка",
      title: "NFT-юзернеймы, за которыми следим",
      subtitle:
        "Показательный грид usernames и коллекций, которые задают тон. Карточки появляются по очереди — как и сделки казны.",
      items: [
        { title: "@matrix", tag: "4L rare", note: "Высокий floor, мало ликвидности" },
        { title: "@future", tag: "premium", note: "Замечен в кошельках китов" },
        { title: "@alpha", tag: "greek", note: "Быстрые флипы, стабильный спрос" },
        { title: "@orbit", tag: "collection", note: "Пакетные сделки" },
        { title: "@storm", tag: "english", note: "Идеален для брендовых наборов" },
        { title: "@quant", tag: "trader", note: "Нарратив на данных" },
      ],
    },
    faq: {
      kicker: "FAQ",
      title: "Ответы на частые вопросы",
      subtitle:
        "Скепсис — нормально. Модель специально сделана простой: купили дешевле, продали дороже, направили прибыль в откуп и сжигание токена.",
      items: [
        {
          q: "Почему эта модель вообще должна работать?",
          a:
            "Рынок Telegram usernames уже существует и генерирует крупные обороты. Мы не придумываем новую экономику — мы подключаемся к существующему on-chain потоку и часть его направляем в откуп и сжигание $USERSTR.",
        },
        {
          q: "Что если объёмы торговли usernames упадут?",
          a:
            "Даже при снижении объёмов хорошие имена остаются дефицитными — они не появляются из воздуха. Стратегию можно адаптировать: фокус на более ликвидных сегментах, более глубокие скидки на входе, гибкая наценка на выходе.",
        },
        {
          q: "Где можно проверить сделки и казну?",
          a:
            "Вся история — on-chain. Адреса кошельков казны, ссылки на коллекции и сделки будут публиковаться открыто, любой холдер сможет отслеживать покупки, листинги и продажи самостоятельно.",
        },
        {
          q: "Какую роль играет обычный холдер $USERSTR?",
          a:
            "Холдить $USERSTR — значит быть на стороне стратегии. Чем больше активности на рынке usernames и чем успешнее циклы казны, тем сильнее поток buyback & burn, который работает в интересах холдеров.",
        },
      ],
    },
    cta: {
      title: "Готов присоединиться к usernames-мете?",
      subtitle:
        "Подписывайся на канал, следи за активностью казны, сделками с usernames и сжиганием $USERSTR. Рынок уже есть — вопрос только, насколько рано ты станешь рядом.",
      btnJoin: "Перейти в Telegram-канал",
      btnTrade: "Торговать $USERSTR",
    },
    footer: {
      copy: "© Telegram Usernames Strategy · $USERSTR",
      linkHow: "Механика",
      linkTokenomics: "Токеномика",
      linkFaq: "FAQ",
    },
  },
};
