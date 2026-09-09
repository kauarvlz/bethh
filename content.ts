// Fonte: pedido e prints fornecidos pelo usuário. Conteúdo editorial centralizado.
// Fotos extraídas do print sem geração, retoque ou comparação antes/depois.
export const content = {
 name:'Espaço Beth Souza', phone:'+55 12 99133-4460', whatsappNumber:'5512991334460',
 branding:{prefix:'Espaço',signature:'Beth Souza',photoNote:'Amor & cuidado'},
 ui:{schedule:'Agendar pelo WhatsApp',skip:'Pular para o conteúdo',openMenu:'Abrir menu',closeMenu:'Fechar menu'},
 instagram:'https://www.instagram.com/espacobethsouza_sjc/',instagramHandle:'@espacobethsouza_sjc',
 message:'Olá! Gostaria de saber mais sobre os serviços do Espaço Beth Souza.',
 navigation:[{label:'Início',href:'#inicio'},{label:'Serviços',href:'#servicos'},{label:'Trabalhos',href:'#trabalhos'},{label:'Sobre',href:'#sobre'},{label:'Contato',href:'#contato'}],
 hero:{eyebrow:'Cabeleireira desde 1998',title:'Você é sua marca.',accent:'Invista em você.',description:'Conheça o Espaço Beth Souza, explore os trabalhos e converse sobre o cuidado que você procura.',primary:'Conversar sobre meu atendimento',secondary:'Ver trabalhos',caption:'Beleza que faz parte de você.'},
 facts:[{title:'Desde 1998',description:'Experiência em beleza'},{title:'Mais de 5 mil',description:'Transformações, conforme a bio do salão'},{title:'Pelo WhatsApp',description:'Converse e solicite seu agendamento'}],
 servicesIntro:{eyebrow:'Seu momento de cuidado',title:'Um cuidado para cada detalhe.',description:'Descubra os atendimentos e converse com o salão para encontrar o que combina com você.',action:'Perguntar sobre'},
 services:[
 {id:'cabelos',name:'Cabelos',description:'Um novo olhar para o seu cabelo. Conte o que você procura e conheça os cuidados disponíveis.',icon:'scissors',confirmation:'Categoria apoiada nas fotos. Confirmar técnicas e atendimentos oferecidos.'},
 {id:'progressiva',name:'Progressiva',description:'Quer saber mais sobre esse atendimento? Converse sobre seu cabelo e tire suas dúvidas com o salão.',icon:'waves',confirmation:'Categoria aparece nos destaques. Confirmar disponibilidade e detalhes; nenhuma composição, duração ou resultado prometido.'},
 {id:'penteados',name:'Penteados',description:'Inspiração para um momento especial. Compartilhe sua ideia e consulte as possibilidades.',icon:'sparkles',confirmation:'Categoria sugerida pelas fotografias. Confirmar oferta com a proprietária.'},
 {id:'unhas',name:'Unhas',description:'O cuidado também está nos detalhes. Consulte as opções de atendimento para suas unhas.',icon:'flower',confirmation:'Categoria aparece no feed e nos destaques. Confirmar modalidades disponíveis.'}],
 galleryIntro:{eyebrow:'Feitos no Espaço Beth Souza',title:'Conheça alguns trabalhos',description:'Cabelos, penteados e unhas. Um pouco do que você encontra no nosso perfil.',action:'Ver mais no Instagram'},
 images:{hero:{src:'/images/cabelos.webp',alt:'Cliente com cabelo longo castanho, liso na parte superior e com pontas onduladas, no salão.',width:171,height:300},salon:{src:'/images/salao.webp',alt:'Ambiente do salão, com clientes nas cadeiras e entrada iluminada pela luz do dia.',width:233,height:267}},
 gallery:[{src:'/images/ondas.webp',alt:'Cabelo longo castanho com ondas, fotografado de costas no salão.',label:'Cabelos',caption:'Movimento em cada detalhe',width:233,height:268},{src:'/images/penteado.webp',alt:'Penteado com cachos e acessório floral delicado.',label:'Penteados',caption:'Para momentos especiais',width:234,height:311},{src:'/images/unhas.webp',alt:'Unhas esmaltadas em tom vinho, fotografadas no salão.',label:'Unhas',caption:'Cor que expressa você',width:233,height:280}],
 about:{eyebrow:'Nosso espaço',title:'Conheça o Espaço Beth Souza',paragraphs:['Cabeleireira desde 1998, Beth Souza apresenta no seu perfil uma trajetória de mais de 5 mil transformações.','Entre cabelos, penteados e unhas, os trabalhos convidam você a encontrar inspiração para o seu próximo cuidado. Conheça o espaço pelas fotos e converse sobre o que procura.'],quote:'Você é sua marca, invista!',action:'Conversar com o salão',imageCaption:'Um olhar para o nosso espaço'},
 stepsIntro:{eyebrow:'Do seu jeito, no seu tempo',title:'Seu próximo cuidado começa com uma conversa.'},
 steps:[{title:'Encontre sua inspiração',description:'Conheça os trabalhos e serviços do salão.'},{title:'Conte o que procura',description:'Converse pelo WhatsApp sobre o atendimento que você deseja.'},{title:'Combine os detalhes',description:'Confirme os detalhes e a disponibilidade diretamente com o salão.'}],
 contact:{eyebrow:'Um tempo para você',title:'Vamos conversar sobre seu próximo cuidado?',description:'Conte sua ideia, tire suas dúvidas e consulte a disponibilidade.',action:'Conversar pelo WhatsApp',note:'O agendamento será combinado diretamente na conversa com o salão.'},
 footer:{note:'Prévia demonstrativa criada pela Krany Media',tagline:'Você é sua marca. Invista em você.'},
 project:{demo:true,paletteStatus:'Proposta visual para a prévia. Não é uma identidade oficial confirmada.',location:null,businessHours:null,pending:['Confirmar cidade e endereço. O sufixo sjc sugere São José dos Campos, mas não comprova a localização.','Confirmar horários de funcionamento antes de incluir.','Validar todas as categorias e, em especial, a oferta de penteados.','Aprovar paleta, textos e assinatura tipográfica.','Obter fotos originais em alta resolução e autorização de uso de imagem das pessoas antes de publicação pública.','Revalidar telefone e Instagram com a proprietária.'],imageSource:'Recortes de codex-clipboard-c93313d0-afb9-4b87-8a6e-cac51b823ef1.png. Resolução limitada ao print; sem imagens geradas ou de banco.'}
} as const;
export function whatsappHref(category?:string){
 const message=category ? 'Olá! Gostaria de saber mais sobre o atendimento de '+category+' no '+content.name+'.' : content.message;
 return 'https://wa.me/'+content.whatsappNumber+'?text='+encodeURIComponent(message).replace(/!/g,'%21');
}
