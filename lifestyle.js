(function () {
  "use strict";
  const P = 'assets/editorial/';
  const D = 'assets/diy/';
  const S = 'assets/size-guide/';
  const translations = {
    en: {
      realGalleryLabel:"THE FINISHING DETAILS",realGalleryTitle:"The details make it personal.",realGalleryBody:"Explore the color, texture and crystal accents behind each design, up close.",realColorLilac:"Lilac",realColorPink:"Pink",realColorAqua:"Aqua Blue",realColorIvory:"Ivory",diySizesLabel:"Available sizes",
      label: 'THE ART OF TOGETHERNESS', heading: 'The everyday, made extraordinary.',
      lead: 'The moments worth dressing for are rarely planned. A morning walk. A favorite corner. A coffee with someone who never leaves your side.',
      journey: 'EVERYDAY RITUALS', walkTitle: 'Every walk tells a story', walkText: 'For all the places you discover together.',
      windowTitle: 'A beautiful kind of ordinary', windowText: 'Home is wherever they settle in.',
      coffeeTitle: 'Always room for one more', coffeeText: 'A little companion for the day’s best moments.',
      shop: 'Explore the collection', editLabel: 'AN OBJECT OF AFFECTION', editTitle: 'Not just an accessory. Part of your story.',
      editBody: 'Thoughtful color and considered details for the companions who make familiar places feel like home.',
      quietCaption:'Soft hours at home', giftCaption:'Made for meaningful moments',
      chapterLabel:'THE MOMENTS THAT MATTER', chapterTitle:'Where love feels at home.',
      chapterBody:'From a quiet evening to the smallest welcome home, the real luxury is the bond you share.',
      closeCaption:'Always by your side', lightCaption:'Quietly radiant', sleepCaption:'Dream softly. Collar off at bedtime.',
      note:'Lifestyle scenes are artistic visualizations. Refer to the unretouched product photography in the collection for exact color, stitching and hardware.',
      browse:'See real product details',

      diyLabel:'DIY CREATIVE PET COLLAR',
      diyTitle:'A collar you can style, switch and make your own.',
      diyLead:'Built for pet lovers who want more than a fixed look: choose the base, change the charms and create a collar that feels personal every single time.',
      diyIntro:'Our DIY Creative Pet Collar brings together five signature ideas: free styling, interchangeable looks, modular construction, one-of-a-kind customization and the gentle symbolic meaning of natural crystals. Thoughtfully selected beads, crystals and charms invite you to design a piece that expresses love, protection, calm and everyday beauty.',
      diyFeature1Title:'DIY freedom',
      diyFeature1Body:'Mix colors, shapes and materials freely to create a look that matches your pet’s personality and your own creative taste.',
      diyFeature2Title:'Switch the mood anytime',
      diyFeature2Body:'Detachable adornments make it easy to swap, remove or re-style pieces, so one collar can become many looks.',
      diyFeature3Title:'Modular design',
      diyFeature3Body:'Flexible connection points allow you to add, reduce or replace decorative elements with ease for more styling freedom.',
      diyFeature4Title:'Personalized custom feel',
      diyFeature4Body:'Choose crystals, beads and pendants according to your pet’s character and your preferences for a truly one-of-one piece.',
      diyFeature5Title:'Natural crystal meaning',
      diyFeature5Body:'Natural crystal elements carry beautiful symbolic meanings—love, protection, calm and blessing—so every design feels warm and heartfelt.',
      diyStep1Title:'Choose a base',
      diyStep1Body:'Start from a refined strap silhouette in silver, cream or deep espresso-inspired tones.',
      diyStep2Title:'Add charms and crystals',
      diyStep2Body:'Select floral ornaments, crystal accents and interchangeable bead strands to shape the final look.',
      diyStep3Title:'Restyle whenever you want',
      diyStep3Body:'Rearrange, switch or refresh the details whenever the season, mood or occasion changes.',
      diySeriesLabel:'SIGNATURE SERIES',
      diySeriesTitle:'Three styling directions, each with its own mood and story.',
      diySeriesBody:'Instead of stacking many pictures together, the DIY concept is presented as complete series ideas: each one has a clear look, a core mood and a matching set of details.',
      diySeries1Title:'Silver Heart Series',
      diySeries1Body:'A cool silver base with a heart centerpiece and pale blue crystal strand. The mood is clean, soft and quietly luxurious—ideal for daily styling that still feels refined.',
      diyPriceLabel:'Price', diySeries1Price:'M US$34.98\nL US$39.67\nXL US$44.37', diySeries2Price:'M US$34.98\nL US$39.67\nXL US$44.37', diySeries3Price:'M US$34.98\nL US$39.67\nXL US$44.37',
      diySeries2Title:'Espresso Garnet Series',
      diySeries2Body:'A deep espresso strap finished with a ruby-toned centerpiece and darker crystal drops. This direction feels richer, more vintage and more dramatic for a stronger statement look.',
      diySeries3Title:'Cream Blossom Series',
      diySeries3Body:'A cream collar decorated with floral accents and pearl-like strands. The result feels light, sweet and photogenic, especially for soft portraits, gatherings and festive moments.',
      diyFoot:'Crystal references are presented as symbolic and emotional design elements, not medical claims.',
      diyCta:'Explore the main collection',

      sizeVisualTitle:'Neck size quick reference',
      sizeVisualNote:'Use the neck circumference you actually measured as the priority reference. The image below summarizes size, width and suggested body-weight reference.',
      sizeStrapTitle:'Structure and adjustable range',
      sizeStrapNote:'This extra reference shows strap width, full length and the adjustable range for each collar size.',
      catSafetyShort:"Cat portrait is an editorial concept. Please confirm a breakaway collar design before any actual cat wear.",
      primarySizeTitle:"Find the right fit",primarySizeText:"Measure the neck at the intended wearing position. The old generic XS–XL ranges are not validated for these new designs and must not be used to choose a size.",primarySizeAction:"Before ordering, confirm which construction and adjustable range applies to your exact collar.",sizeConflictNote:"TWO DIFFERENT SIZE SYSTEMS · These reference measurements come from different collar constructions and have not been matched to the four listed products. Do not order by S/M/L alone. Ask for confirmation of the actual neck range, width and hardware before purchasing.",sizeVisualTitle:"Reference A — 2.7 cm band",sizeVisualNote:"Neck circumference range by size; body weight is a secondary supplier reference only. Not SKU-verified.",sizeStrapTitle:"Reference B — variable-width strap",sizeStrapNote:"Different collar construction. Shows total strap length, adjustable range and width. Not interchangeable with reference A.",chartSize:"Size",chartNeck:"Neck (cm)",chartWidth:"Width",chartWeight:"Weight*",chartLength:"Total length",chartRange:"Adjustable neck (cm)",chartWeightNote:"*Weight translated from supplier reference (jin), not a safe substitute for neck measurement.",catSafetyNote:"CAT FIT NOTE · The styled cat photo is a concept image. No quick-release/breakaway mechanism has been verified for this jeweled design. Do not use it as a cat collar unless a qualified breakaway construction and securely attached accessories are confirmed. Remove decorative collars for sleep and unsupervised activity.",materialNote:"Materials and crystal composition require confirmation before purchase. Lifestyle imagery is an artistic presentation, not proof of safety or material grade."
    },
    id: {
      realGalleryLabel:"DETAIL PILIHAN",realGalleryTitle:"Keindahan ada pada detailnya.",realGalleryBody:"Lihat pilihan warna, tekstur, dan aksen kristal dari setiap desain secara lebih dekat.",realColorLilac:"Ungu muda",realColorPink:"Merah muda",realColorAqua:"Biru aqua",realColorIvory:"Krem gading",diySizesLabel:"Ukuran tersedia",
      label:'SENI KEBERSAMAAN', heading:'Momen sehari-hari terasa istimewa.',
      lead:'Momen berharga sering datang tanpa rencana. Jalan pagi, sudut rumah favorit, atau kopi bersama sahabat kecil yang selalu menemani.',
      journey:'RITUAL SEHARI-HARI',walkTitle:'Setiap jalan punya cerita',walkText:'Untuk setiap tempat yang kalian jelajahi bersama.',
      windowTitle:'Indahnya momen sederhana',windowText:'Rumah terasa hangat saat mereka ada.',
      coffeeTitle:'Selalu ada tempat di sisimu',coffeeText:'Teman kecil untuk setiap momen istimewa.',
      shop:'Lihat koleksi',editLabel:'UNGKAPAN KASIH',editTitle:'Bukan sekadar aksesori. Bagian dari kisah kalian.',
      editBody:'Pilihan warna lembut dan detail penuh perhatian untuk sahabat yang membuat rumah terasa berarti.',
      quietCaption:'Waktu tenang di rumah',giftCaption:'Momen yang layak dikenang',
      chapterLabel:'MOMEN YANG BERARTI', chapterTitle:'Saat cinta terasa seperti rumah.',
      chapterBody:'Dari malam yang tenang hingga sambutan kecil di rumah, keindahan sebenarnya ada dalam ikatan kalian.',
      closeCaption:'Selalu di sisimu',lightCaption:'Cantik dalam kesederhanaan',sleepCaption:'Tidur nyenyak, tanpa kalung.',
      note:'Foto suasana merupakan ilustrasi artistik. Lihat foto produk asli di koleksi untuk memastikan warna, jahitan, dan detail pengait.',
      browse:'Lihat detail produk asli',

      diyLabel:'KALUNG HEWAN DIY KREATIF',
      diyTitle:'Satu kalung yang bisa kamu atur, ganti, dan jadikan benar-benar milikmu.',
      diyLead:'Dirancang untuk pecinta hewan yang ingin lebih dari satu tampilan tetap: pilih dasar kalungnya, ganti aksennya, lalu ciptakan gaya yang terasa personal setiap saat.',
      diyIntro:'DIY Creative Pet Collar menggabungkan lima keunggulan utama: kebebasan merangkai, gaya yang bisa diganti kapan saja, desain modular, sentuhan kustom yang personal, dan makna lembut dari kristal alami. Manik-manik, kristal, dan charm dipilih dengan cermat agar setiap karya membawa kesan cinta, perlindungan, ketenangan, dan keindahan dalam keseharian.',
      diyFeature1Title:'Bebas berkreasi',
      diyFeature1Body:'Pilih warna, bentuk, dan material secara bebas untuk menciptakan tampilan yang sesuai dengan karakter hewan dan selera kreatifmu.',
      diyFeature2Title:'Ganti gaya sesuka hati',
      diyFeature2Body:'Aksesori yang bisa dilepas memudahkanmu menukar, melepas, atau menyusun ulang detail, sehingga satu kalung bisa punya banyak gaya.',
      diyFeature3Title:'Desain modular',
      diyFeature3Body:'Titik sambungan yang fleksibel memudahkan penambahan, pengurangan, atau penggantian ornamen agar styling terasa lebih bebas.',
      diyFeature4Title:'Kesan kustom yang personal',
      diyFeature4Body:'Pilih kristal, manik, dan liontin sesuai karakter hewan dan preferensi pemilik untuk hasil yang benar-benar unik.',
      diyFeature5Title:'Makna kristal alami',
      diyFeature5Body:'Elemen kristal alami membawa simbol cinta, perlindungan, ketenangan, dan doa baik sehingga setiap desain terasa hangat dan penuh arti.',
      diyStep1Title:'Pilih dasar kalung',
      diyStep1Body:'Mulai dari siluet strap yang rapi dalam warna silver, cream, atau nuansa espresso yang elegan.',
      diyStep2Title:'Tambahkan charm dan kristal',
      diyStep2Body:'Pilih ornamen bunga, aksen kristal, dan untaian manik yang dapat diganti untuk membentuk tampilan akhir.',
      diyStep3Title:'Ubah lagi kapan saja',
      diyStep3Body:'Susun ulang, ganti, atau segarkan detail sesuai musim, mood, atau acara.',
      diySeriesLabel:'ARAH GAYA UTAMA',
      diySeriesTitle:'Tiga seri styling dengan nuansa dan cerita yang berbeda.',
      diySeriesBody:'Blok DIY kini ditata sebagai ide seri yang utuh, bukan sekadar tumpukan foto. Setiap seri memiliki gaya utama, suasana, dan kombinasi detail yang jelas.',
      diySeries1Title:'Seri Silver Heart',
      diySeries1Body:'Dasar silver dingin dipadukan dengan pusat hati dan rangkaian kristal biru muda. Nuansanya bersih, lembut, dan mewah secara halus—cocok untuk tampilan harian yang rapi dan elegan.',
      diyPriceLabel:'Harga', diySeries1Price:'M Rp633.000\nL Rp718.000\nXL Rp803.000', diySeries2Price:'M Rp633.000\nL Rp718.000\nXL Rp803.000', diySeries3Price:'M Rp633.000\nL Rp718.000\nXL Rp803.000',
      diySeries2Title:'Seri Espresso Garnet',
      diySeries2Body:'Strap espresso gelap dengan batu tengah merah ruby dan rangkaian kristal bernada gelap. Karakternya lebih kuat, vintage, dan dramatis untuk tampilan yang lebih berani.',
      diySeries3Title:'Seri Cream Blossom',
      diySeries3Body:'Kalung warna cream dengan aksen bunga dan untaian mirip mutiara. Hasil akhirnya terasa ringan, manis, dan fotogenik, cocok untuk potret lembut, momen kumpul, dan suasana spesial.',
      diyFoot:'Referensi kristal ditampilkan sebagai unsur simbolik dan emosional dalam desain, bukan klaim medis.',
      diyCta:'Lihat koleksi utama',

      sizeVisualTitle:'Referensi cepat ukuran leher',
      sizeVisualNote:'Gunakan ukuran lingkar leher hasil pengukuran nyata sebagai acuan utama. Gambar di bawah merangkum ukuran, lebar, dan referensi berat badan.',
      sizeStrapTitle:'Struktur ukuran dan rentang penyesuaian',
      sizeStrapNote:'Referensi tambahan ini memperlihatkan lebar strap, panjang total, serta rentang penyesuaian setiap ukuran kalung.',
      catSafetyShort:"Foto kucing adalah konsep editorial. Pastikan desain kalung breakaway terverifikasi sebelum dikenakan pada kucing.",
      primarySizeTitle:"Pastikan ukuran yang tepat",primarySizeText:"Ukur lingkar leher pada posisi pemakaian. Ukuran XS–XL umum dari versi lama belum diverifikasi untuk desain baru dan tidak boleh dipakai sebagai dasar pemilihan.",primarySizeAction:"Sebelum memesan, konfirmasi konstruksi dan rentang ukuran yang berlaku untuk kalung pilihanmu.",sizeConflictNote:"DUA SISTEM UKURAN BERBEDA · Data ini berasal dari dua konstruksi kalung yang belum dipetakan ke empat produk di atas. Jangan memesan hanya berdasarkan huruf S/M/L. Konfirmasi rentang leher, lebar, dan pengait untuk produk yang dipilih.",sizeVisualTitle:"Referensi A — lebar 2,7 cm",sizeVisualNote:"Rentang lingkar leher per ukuran; berat hanya referensi tambahan pemasok. Belum diverifikasi per produk.",sizeStrapTitle:"Referensi B — lebar berbeda",sizeStrapNote:"Konstruksi kalung berbeda. Menunjukkan panjang total, rentang penyesuaian, dan lebar. Tidak boleh digabungkan dengan A.",chartSize:"Ukuran",chartNeck:"Leher (cm)",chartWidth:"Lebar",chartWeight:"Berat*",chartLength:"Panjang total",chartRange:"Leher dapat disetel (cm)",chartWeightNote:"*Berat dikonversi dari referensi pemasok (jin), bukan pengganti pengukuran lingkar leher.",catSafetyNote:"CATATAN UNTUK KUCING · Foto kucing adalah konsep visual. Mekanisme quick-release/breakaway pada desain ini belum terverifikasi. Jangan digunakan untuk kucing sampai struktur breakaway dan keamanan aksesori dikonfirmasi. Lepas kalung dekoratif saat tidur dan tanpa pengawasan.",materialNote:"Komposisi material dan kristal perlu dikonfirmasi sebelum membeli. Gambar gaya hidup adalah visual artistik, bukan bukti mutu bahan atau keselamatan."
    },
    zh: {
      realGalleryLabel:"细节之美",realGalleryTitle:"每一个细节，都有它的温柔。",realGalleryBody:"近距离欣赏每款项圈的色彩、质感与水晶装饰细节。",realColorLilac:"粉紫色",realColorPink:"粉色",realColorAqua:"浅蓝色",realColorIvory:"奶白色",diySizesLabel:"可选尺码",
      label:'相伴的艺术', heading:'让平凡日常，也值得珍藏。',
      lead:'最珍贵的时刻，往往不需要安排。一场晨间散步，一个喜欢的角落，一杯咖啡，还有始终陪在身边的它。',
      journey:'日常的小小仪式',walkTitle:'每一步，都有我们的故事',walkText:'为一起走过的每个地方留下回忆。',
      windowTitle:'把寻常日子过成诗',windowText:'它安心停留的地方，就是家。',
      coffeeTitle:'永远为你留一个位置',coffeeText:'把平凡的午后，变成温柔的陪伴。',
      shop:'探索系列',editLabel:'爱的日常信物',editTitle:'不止是一件配饰，更是我们的故事。',
      editBody:'温柔的色彩、细腻的细节，送给那个让普通日子也变得珍贵的小伙伴。',
      quietCaption:'家中柔软的时光',giftCaption:'值得纪念的礼赠时刻',
      chapterLabel:'心动的每一刻',chapterTitle:'有它的地方，就是温暖的家。',
      chapterBody:'从宁静的夜晚到回家时那一声轻轻的迎接，真正奢侈的是彼此的陪伴。',
      closeCaption:'时时刻刻都在身边',lightCaption:'静静绽放的优雅',sleepCaption:'睡觉之前，记得摘下项圈。',
      note:'生活场景为艺术化效果图；颜色、缝线和五金细节请以商品系列中的真实实拍照片为准。',
      browse:'查看真实产品细节',

      diyLabel:'DIY创意宠物项圈',
      diyTitle:'一条可以自由搭配、随心更换、真正属于你的宠物项圈。',
      diyLead:'为不满足于固定款式的宠物主人而设计：自由选择基础项圈，更换配件与吊饰，随时打造专属造型。',
      diyIntro:'DIY创意宠物项圈，融合自由搭配、随心更换、模块化组合、个性化专属定制与天然水晶能量疗愈五大特色。精选多样珠子、天然水晶与精美吊饰，让主人亲手设计独一无二的专属配饰。每一件作品不仅展现个性与创意，更寄托着对宠物的爱、守护与美好祝福，让天然水晶承载温柔的寓意，为宠物带来安心、平静与温暖，让爱与陪伴始终相随。',
      diyFeature1Title:'DIY自由搭配',
      diyFeature1Body:'自由选择不同颜色、形状和材质的珠子、吊饰，发挥创意，打造专属风格。',
      diyFeature2Title:'随心更换风格',
      diyFeature2Body:'配件可拆卸、更换和重新组合，一条项圈轻松变换多种造型。',
      diyFeature3Title:'模块化组合设计',
      diyFeature3Body:'采用灵活的连接设计，方便添加、减少或更换装饰配件，让搭配更加自由。',
      diyFeature4Title:'个性化专属定制',
      diyFeature4Body:'根据宠物的特点和主人的喜好，自由选择天然水晶、珠子及吊坠，打造独一无二的专属项圈。',
      diyFeature5Title:'天然水晶能量疗愈',
      diyFeature5Body:'融入天然水晶元素，结合不同水晶所承载的美好寓意，将爱、守护、平静与祝福融入每一件作品。',
      diyStep1Title:'选择基础项圈',
      diyStep1Body:'从银灰、奶油白、深棕等高雅底色中选择基础皮带式项圈。',
      diyStep2Title:'添加吊饰与水晶',
      diyStep2Body:'自由加入花朵装饰、天然水晶与可更换珠串，构成你想要的整体风格。',
      diyStep3Title:'随时重新搭配',
      diyStep3Body:'根据季节、心情或场景，自由拆换和重组装饰细节，让项圈常换常新。',
      diySeriesLabel:'系列化展示',
      diySeriesTitle:'三个系列方向，各有自己的气质和故事。',
      diySeriesBody:'DIY板块不再只是把图片堆放在一起，而是按照完整系列来展示：每个系列都有明确的主风格、核心气质和对应配件组合。',
      diySeries1Title:'银灰爱心系列',
      diySeries1Body:'以银灰色底带为基础，搭配爱心主饰与浅蓝色珠串，整体气质清爽、温柔、克制，适合想要日常佩戴也显得精致高级的宠物家庭。',
      diyPriceLabel:'价格', diySeries1Price:'M Rp633.000\nL Rp718.000\nXL Rp803.000', diySeries2Price:'M Rp633.000\nL Rp718.000\nXL Rp803.000', diySeries3Price:'M Rp633.000\nL Rp718.000\nXL Rp803.000',
      diySeries2Title:'深棕红宝系列',
      diySeries2Body:'深棕色项圈搭配红宝石感主石和深色珠串，层次更强，风格更偏复古与华丽，适合希望造型更有存在感、更有仪式感的搭配方向。',
      diySeries3Title:'奶油花朵系列',
      diySeries3Body:'奶油色项圈结合花朵装饰和珍珠感珠串，整体更轻盈、甜美、柔和，特别适合拍照、聚会和节日等偏温柔氛围的生活场景。',
      diyFoot:'天然水晶相关内容为设计寓意与情感表达，不作为医疗功效承诺。',
      diyCta:'查看主系列商品',

      sizeVisualTitle:'颈围快速参考',
      sizeVisualNote:'请以实际测量得到的宠物颈围为优先参考。下方图片汇总了尺码、宽度与建议体重参考。',
      sizeStrapTitle:'项圈结构与调节范围',
      sizeStrapNote:'这张补充参考图展示了不同尺码项圈的宽度、总长度与可调节范围。',
      catSafetyShort:"猫咪佩戴照为艺术化展示，实际用于猫咪前必须确认安全快脱结构。",
      primarySizeTitle:"先确认佩戴尺寸",primarySizeText:"请按实际佩戴位置测量颈围。旧版 XS–XL 通用范围尚未经过新款式验证，不能用作本批商品的直接下单尺码。",primarySizeAction:"购买前请先确认所选项圈属于哪一种结构，并核实相应的可调颈围、宽度与五金。",sizeConflictNote:"两套不同结构的尺码参考 · 以下数据来自两种不同的项圈结构，目前尚未确认分别对应上方哪一款商品。不能只凭 S/M/L 下单，须先核实实际颈围、宽度与连接结构。",sizeVisualTitle:"参考 A — 2.7 cm 宽款",sizeVisualNote:"按尺码列出颈围范围；体重仅为原供应商辅助参考，并非已核实的商品对应规格。",sizeStrapTitle:"参考 B — 不同宽度的带式款",sizeStrapNote:"不同的项圈结构，提供总长、可调范围和宽度；不能与参考 A 混用。",chartSize:"尺码",chartNeck:"颈围 (cm)",chartWidth:"宽度",chartWeight:"体重*",chartLength:"总长",chartRange:"可调颈围 (cm)",chartWeightNote:"*体重换算自原供应商“斤”的参考值，不能代替实际测量颈围。",catSafetyNote:"猫咪佩戴提示 · 咖啡馆猫咪照片属于艺术化展示，尚未核实这款珠饰项圈具有适合猫的快脱结构。确认快脱和配件牢固性以前，不应作为猫咪正式佩戴产品销售或使用；睡觉及无人看护时应取下装饰项圈。",materialNote:"购买前须核实珠饰与天然水晶的实际材质。生活方式场景为艺术展示，并非材质等级或安全性能证明。"
    }
  };

  function activeLanguage() {
    const v = document.documentElement.lang;
    return v === 'zh-CN' || v === 'zh' ? 'zh' : v === 'id' ? 'id' : 'en';
  }
  function t(key) {
    const dict = translations[activeLanguage()] || translations.en;
    return dict[key] || translations.en[key] || '';
  }
  function card(img, key, descKey, klass) {
    return `<figure class="lw-scene ${klass||''}"><img loading="lazy" decoding="async" src="${P}${img}.webp" alt="LOWEN pet lifestyle editorial image"><figcaption><span data-lw="${key}"></span><small data-lw="${descKey}"></small></figcaption></figure>`;
  }

  const first = document.createElement('section');
  first.className = 'lw-journey';
  first.setAttribute('aria-label','The art of togetherness');
  first.innerHTML = `
    <div class="lw-intro"><div><p class="lw-overline" data-lw="label"></p><h2 data-lw="heading"></h2></div><div class="lw-aside"><p data-lw="lead"></p><a href="#koleksi" class="lw-inline-cta" data-lw="shop"></a></div></div>
    <div class="lw-journal-title"><span data-lw="journey"></span><i></i><span>01 — 03</span></div>
    <div class="lw-triptych">
      ${card('02-weekend-walk','walkTitle','walkText','lw-walk')}
      ${card('03-window-light','windowTitle','windowText','lw-window')}
      ${card('04-coffee-companion','coffeeTitle','coffeeText','lw-coffee')}
    </div>
    <p class="lw-cat-editorial-note" data-lw="catSafetyShort"></p>`;

  const diyCards = [1,2,3,4,5].map(i => `
    <article class="lw-diy-feature-card">
      <span class="lw-diy-feature-index">0${i}</span>
      <h3 data-lw="diyFeature${i}Title"></h3>
      <p data-lw="diyFeature${i}Body"></p>
    </article>`).join('');

  const diySteps = [1,2,3].map(i => `
    <article class="lw-diy-step">
      <span>0${i}</span>
      <h3 data-lw="diyStep${i}Title"></h3>
      <p data-lw="diyStep${i}Body"></p>
    </article>`).join('');

  const diySeries = [
    { index:'01', titleKey:'diySeries1Title', bodyKey:'diySeries1Body', hero:'03', gallery:['01','02','09','11','12','16'] },
    { index:'02', titleKey:'diySeries2Title', bodyKey:'diySeries2Body', hero:'05', gallery:['04','06','10','13'] },
    { index:'03', titleKey:'diySeries3Title', bodyKey:'diySeries3Body', hero:'08', gallery:['07','14','15','18','20'] }
  ].map(series => `
      <article class="lw-diy-series-card">
        <div class="lw-diy-series-copy">
          <span class="lw-diy-series-index">${series.index}</span>
          <h3 data-lw="${series.titleKey}"></h3>
          <p data-lw="${series.bodyKey}"></p>
          <p class="lw-diy-price"><span data-lw="diyPriceLabel"></span><strong data-lw="diySeries${Number(series.index)}Price"></strong></p>
          ${series.index === "02" ? `<p class="lw-diy-sizes"><span data-lw="diySizesLabel"></span><strong>M · L · XL</strong></p>` : ""}
        </div>
        <div class="lw-diy-series-visuals">
          <figure class="lw-diy-series-hero"><img loading="eager" decoding="sync" src="${D}diy-${series.hero}.webp" alt="LOWEN DIY series visual"></figure>
          <div class="lw-diy-series-grid">
            ${series.gallery.map(n => `<figure><img loading="eager" decoding="sync" src="${D}diy-${n}.webp" alt="LOWEN DIY detail ${n}"></figure>`).join('')}
          </div>
        </div>
      </article>`).join('');

  const diy = document.createElement('section');
  diy.className = 'lw-diy';
  diy.id = 'diy-collar';
  diy.innerHTML = `
    <div class="lw-diy-shell">
      <div class="lw-diy-head">
        <div class="lw-diy-head-main"><p class="lw-overline" data-lw="diyLabel"></p><h2 data-lw="diyTitle"></h2></div>
        <div class="lw-diy-head-copy"><p class="lw-diy-lead" data-lw="diyLead"></p><p class="lw-diy-intro" data-lw="diyIntro"></p></div>
      </div>
      <div class="lw-diy-steps">${diySteps}</div>
      <div class="lw-diy-feature-grid">${diyCards}</div>
      <div class="lw-diy-series-head"><div><p class="lw-overline" data-lw="diySeriesLabel"></p><h3 data-lw="diySeriesTitle"></h3></div><p data-lw="diySeriesBody"></p></div>
      <div class="lw-diy-series-list">${diySeries}</div>
      <div class="lw-diy-foot"><p data-lw="diyFoot"></p><a class="lw-inline-cta" href="#koleksi" data-lw="diyCta"></a></div>
    </div>`;

  const mid = document.createElement('section');
  mid.className='lw-portrait';
  mid.innerHTML=`
    <div class="lw-portrait-head"><p class="lw-overline" data-lw="editLabel"></p><h2 data-lw="editTitle"></h2><p data-lw="editBody"></p></div>
    <div class="lw-portrait-photos">
      <figure class="lw-portrait-frame lw-portrait-frame-a"><img loading="lazy" decoding="async" src="${P}05-quiet-corner.webp" alt="Ragdoll cat resting comfortably at home"><figcaption data-lw="quietCaption"></figcaption></figure>
      <figure class="lw-portrait-frame lw-portrait-frame-b"><img loading="lazy" decoding="async" src="${P}06-gift-day.webp" alt="Dog with a collar in a thoughtfully styled gifting scene"><figcaption data-lw="giftCaption"></figcaption></figure>
    </div>`;

  const last = document.createElement('section');
  last.className='lw-home';
  last.innerHTML=`
     <div class="lw-home-head"><p class="lw-overline" data-lw="chapterLabel"></p><h2 data-lw="chapterTitle"></h2><p data-lw="chapterBody"></p></div>
     <div class="lw-home-scenes">
       <figure class="lw-home-main"><img loading="lazy" decoding="async" src="${P}07-close-bond.webp" alt="Woman and cat sharing an affectionate moment at home"><figcaption data-lw="closeCaption"></figcaption></figure>
       <figure class="lw-home-small"><img loading="lazy" decoding="async" src="${P}08-soft-light.webp" alt="White cat with pink beaded collar in a warm living room"><figcaption data-lw="lightCaption"></figcaption></figure>
       <figure class="lw-home-small"><img loading="lazy" decoding="async" src="${P}09-sleeping-together.webp" alt="Small pet sleeping peacefully in a cozy room"><figcaption data-lw="sleepCaption"></figcaption></figure>
     </div>
     <div class="lw-home-bottom"><p data-lw="note"></p><a class="lw-inline-cta" href="#koleksi" data-lw="browse"></a></div>`;

  function updateLanguage() {
    const dict = translations[activeLanguage()] || translations.en;
    for (const node of [first, diy, mid, last]) {
      node.querySelectorAll('[data-lw]').forEach(el => {
        const key = el.getAttribute('data-lw');
        if (dict[key] && el.textContent !== dict[key]) el.textContent = dict[key];
      });
    }
    const gallery = document.querySelector('.real-product-gallery');
    if (gallery) gallery.querySelectorAll('[data-lw]').forEach(el => {
      const key = el.getAttribute('data-lw');
      if (dict[key] && el.textContent !== dict[key]) el.textContent = dict[key];
    });
    patchSizeGuide();
  }

  const sizeA = [
    ['S','18–25','2.7','1–3.5'],['M','28–35','2.7','3–6.5'],
    ['L','38–45','2.7','6–10'],['XL','48–55','2.7','9.5–20']
  ];
  const sizeB = [
    ['S','37','27–32','1.5'],['M','42','29–36','2.0'],['L','50','37–47','2.5']
  ];
  function renderSizeTable(headers,rows) {
    return `<table class="lw-verified-ref-table" role="table"><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map(cell=>`<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  }
  function patchSizeGuide() {
    const root = document.getElementById('root');
    if (!root) return;
    const guide = root.querySelector('.size-guide');
    if (!guide) return;
    const sizeRef = guide.querySelector('.size-reference');
    if (!sizeRef) return;
    const d = translations[activeLanguage()] || translations.en;
    const original = sizeRef.querySelector('.size-table-wrap');
    if (original) {
      // Remove the old, incompatible numeric quick chart from the *visible* website;
      // leave the original React source intact for code/history and keep the same dark visual container.
      original.innerHTML = `<h3>${d.primarySizeTitle}</h3><p class="lw-size-primary">${d.primarySizeText}</p><p class="lw-size-primary lw-size-primary-next">${d.primarySizeAction}</p>`;
    }
    let block = guide.querySelector('.lw-size-extra');
    if (!block) {
      block = document.createElement('div');
      block.className = 'lw-size-extra';
      sizeRef.insertAdjacentElement('afterend', block);
    }
    block.innerHTML = `
      <div class="lw-size-source-note">${d.sizeConflictNote}</div>
      <div class="lw-size-pair">
        <article class="lw-size-source-card">
          <div class="lw-size-extra-copy"><h3>${d.sizeVisualTitle}</h3><p>${d.sizeVisualNote}</p></div>
          ${renderSizeTable([d.chartSize,d.chartNeck,d.chartWidth+' (cm)',d.chartWeight+' (kg)'],sizeA)}
          <p class="lw-size-ref-note">${d.chartWeightNote}</p>
        </article>
        <article class="lw-size-source-card">
          <div class="lw-size-extra-copy"><h3>${d.sizeStrapTitle}</h3><p>${d.sizeStrapNote}</p></div>
          ${renderSizeTable([d.chartSize,d.chartLength+' (cm)',d.chartRange,d.chartWidth+' (cm)'],sizeB)}
        </article>
      </div>
      <p class="lw-size-cat-note">${d.catSafetyNote}</p>
      <p class="lw-size-material-note">${d.materialNote}</p>`;
  }

  function attach() {
    const root = document.getElementById('root');
    if (!root) return false;
    const manifesto = root.querySelector('.manifesto');
    const collections = root.querySelector('.collections');
    const duo = root.querySelector('.duo-section');
    if (!manifesto || !collections || !duo) return false;
    if (first.previousElementSibling !== manifesto) manifesto.insertAdjacentElement('afterend', first);
    if (diy.previousElementSibling !== collections) collections.insertAdjacentElement('afterend', diy);
    if (mid.previousElementSibling !== diy) diy.insertAdjacentElement('afterend', mid);
    if (last.previousElementSibling !== duo) duo.insertAdjacentElement('afterend', last);
    updateLanguage();
    return true;
  }

  let pending = false;
  const root = document.getElementById('root');
  if (root) {
    const observer = new MutationObserver(() => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => { pending = false; attach(); });
    });
    observer.observe(root, { childList: true, subtree: false });
  }
  if (!attach()) requestAnimationFrame(attach);
  document.addEventListener('click', function (e) {
    if (e.target.closest('.language-switcher button')) setTimeout(updateLanguage, 80);
  });
})();
