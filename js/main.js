videoDes = [
    'Spike Spiegel y Jet Black, tripulantes del Bebop van a la caza de un traficante de drogas por el que pagan una recompensa de 2.5 millones de hurones (la moneda única internacional). Este traficante es Asimov, quien se ha robado todo el "Ojo Rojo" de la banda a la cual pertenecía y por la cual lo persiguen; con el objeto de venderla e irse a vivir en Marte con su novia Katarina. ',
    'Abdul Hakim, un hombre con una recompensa de 8 millones de hurones, roba una maleta de un centro de investigaciones con un contenido que le hará rico. Cuando saben de su recompensa, Spike y Jet van tras su pista. Pero no son los únicos. El equipo del centro de investigaciones hará lo mismo para apoderarse del contenido de dicha maleta, que acabará siendo parte de la tripulación del Bebop. ',
    'Aparece Faye Valentine. Jugadora y cazarrecompensas que aprovecha cualquier ocasión para ganar dinero. aunque también está en busca y captura por sus grandes deudas de juego. Su destino se cruza con el de los tripulantes del Bebop, debido a que roba una ficha de casino con una clave de cifrado muy extraña y codiciada en el mercado negro. ',
    'Seguimos con Faye Valentine, quien se ha quedado atrapada en el espacio sin combustible. Por desgracia, los primeros que la encuentran son los del Bebop, quienes han perdido su recompensa por la intromisión de una banda terrorista ecologista: los Guerreros del Espacio, fanáticos protectores del Ratón Marino de Ganímedes y poseedores de un arma secreta. ',
    'Primer episodio donde se conoce algo del pasado de Spike. Uno de los líderes de la organización Dragón Rojo ha sido asesinado. Vicius, antiguo miembro de la misma organización, es el causante. Nada más ver las noticias, Spike se va de la nave de Jet a arreglar sus asuntos sin decirle lo que ocurre. Faye por su parte, que ya forma parte de la tripulación del Bebop, decide investigar por su cuenta y riesgo. ¿Quién es el misterioso Vicius y qué vínculo tiene con Spike? ',
    'Siguiendo una presa en un pub de Jazz, Spike se encuentra con una extraña historia. Un viejo inválido en silla de ruedas, un niño prodigioso tocando la armónica y la presa, Giraffe, le da un extraño anillo antes de morir. ¿Qué significa esto? ¿Y por qué la conversación que Spike escucha entre ellos no parece tener que ver con la realidad? ',
    'Siempre siguiendo una pista, los tripulantes de la Bebop buscan una presa, pero esta vez solo saben que tiene el tatuaje de un dragón. Sus pesquisas les llevan a conocer a V.T, una "camionera" espacial apodada La Reina del Heavy Metal. ',
    'Spike y Faye evitan un secuestro dentro de un avión para cobrar la recompensa por los secuestradores. Pero después de ver en acción a Spike, un niño llamado Rocko, portador de una extraña planta, decide tenerlo como maestro y quiere que le enseñe artes marciales. ',
    'Aparece Ed. Una serie de extraños dibujos sobre la superficie de la Tierra; que son idénticas a las Líneas de Nazca, hacen que el gobierno ponga una recompensa por quien los haya hecho y sospechan de un famoso hacker que vive en ese planeta: Ed. Por supuesto los tripulantes del Bebop van tras su pista. ',
    'Esta vez son los recuerdos de Jet los que salen a flote. Su antiguo trabajo en el ISSP y el nombre de la mujer con la que trabajaba: Alisa. A la que va a visitar a Ganímedes. Todo mezclado con una persecución y la nueva vida de esta mujer. '
];


function loadVideo(op) {
    document.getElementById('desc-video').innerHTML = videoDes[op-1];
    document.getElementById('div-video').innerHTML = (
        "<video src='video/v"+op+".mkv' controls autoplay> </video>"
    );
}