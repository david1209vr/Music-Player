const songs = [
    {
        title: "Take your time",
        artist: "Frvnchise Nights",
        file: "music/song1.mp3",
        lyrics: `
00:13 I’ve been thinking ‘bout you,
00:19 every night
00:23 Girl, I don’t know what to do
00:26 Ever since I saw you, baby
00:31 I’ve been losing my mind
00:34 Got me in the mood
00:38 You say you are looking for somebody
00:41 That can treat you right
00:43 You can take your time
00:45 I’ma make you mine
00:47 Take your time (x9)
01:03 Girl, I wanna know your every desire
01:11 I want you to open now
01:13 You just need to show me, baby
01:18 You can call me tonight, girl
01:21 I’m pulling up
01:25 You say you never met nobody
01:27 That can treat you right
01:30 You can take your time
01:32 I’ma make you mine
01:34 Take your time (x10)
        `,
        translation: `
00:13 He estado pensando en ti 
00:19 todas las noches
00:23 Niña, no sé qué hacer
00:26 Desde el momento en que te vi, baby
00:31 He estado perdiendo la cabeza
00:34 Me tienes loco
00:38 Dices que estás buscando a alguien
00:41 Que te trate bien
00:43 Puedes tomarte tu tiempo
00:45 Voy a hacerte mía
00:47 Tómate tu tiempo (x9)
01:03 Niña, quiero conocer cada uno de tus deseos
01:11 Quiero que te abras ahora
01:13 Solo necesitas mostrarme, baby
01:18 Puedes llamarme esta noche, niña
01:21 Voy en camino
01:25 Dices que nunca has conocido a nadie
01:27 Que te trate bien
01:30 Puedes tomarte tu tiempo
01:32 Voy a hacerte mía
01:34 Tómate tu tiempo (x10)
        `
    },
    {
        title: "Deepest fantasies",
        artist: "Frvnchise Nights",
        file: "music/song2.mp3",
        lyrics: `
00:09 I’ve been thinking ‘bout you lately, yeah
00:16 Crazy how you got me so infatuated
00:24 Vision hazy
00:28 Got me chasing
00:31 All your love, baby
00:35 Tell me what you want from me
00:38 I’ll give you everything
00:40 Deepest fantasies, you and me, endlessly
00:48 Lost in ecstasy
00:51 Baby, can’t you see?
00:58 Body moving like the ocean tide
01:02 Hypnotic, I can’t hide
01:06 My desire burning inside
01:09 For your touch i confide
01:11 Never felt like this before, oh no
01:16 Heart racing, losing control
01:20 Want you more and more
01:24 For your deepest fantasies, you and me, endlessly
01:36 Lost in ecstasy
01:39 Baby, can’t you see?
        `,
        translation: `
00:09 He estado pensando en ti últimamente, sí
00:16 Es una locura cómo me tienes tan infatuado
00:24 Con la visión nublada
00:28 Me tienes persiguiendo
00:31 Todo tu amor, baby
00:35 Dime qué quieres de mí
00:38 Te daré todo
00:40 Las fantasías más profundas, tú y yo, sin fin
00:48 Perdidos en el éxtasis
00:51 Baby, ¿no lo ves?
00:58 Tu cuerpo se mueve como la marea del océano
01:02 Hipnótico, no puedo ocultarlo
01:06 Mi deseo ardiendo por dentro
01:09 Por tu toque confieso que
01:11 Nunca antes me había sentido así, oh no
01:16 El corazón latiendo rápido, perdiendo el control
01:20 Te quiero más y más
01:24 Para tus fantasías más profundas, tú y yo, sin fin
01:36 Perdidos en el éxtasis
01:39 Baby, ¿no lo ves?
        `
    },
    {
        title: "Make you feel my passion",
        artist: "Frvnchise Nights",
        file: "music/song3.mp3",
        lyrics: `
00:16 Talking to me crazy, baby
00:20 Tell me what you need from me
00:24 Wanna make you feel my passion
00:29 Yeah, this right here could be so magical
00:33 Tell me how you like it, baby
00:38 Wanna hear you say my name
00:42 You deserve some satisfaction
00:46 Yeah, this right here could be so magical
00:50 Turning on you slow
00:53 Girl I got some things you need to know
00:58 Wanna make you feel my passion
01:02 Yeah, this right here could be so magical
01:07 Tell me how you like it baby
01:12 Wanna hear you say my name
01:16 You deserve some satisfaction
01:20 Yeah, this right here could be so magical
01:24 Let's turn off the lights
01:26 We don't need the mood set
01:29 Going all night, girl I promise you ain't through yet
01:33 You ain't never been this high
01:34 And you ain't gotta leave girl
01:35 You might as well spend the night
01:41 Girl I'm all about your energy
01:46 And if you're down, then i'm down to see
01:50 How we can take this further?
01:54 Going on, girl i'm tryna get to know ya
01:59 Turning on you slow
02:02 Girl I got some things you need to know
02:07 Wanna make you feel my passion
02:10 Yeah, this right here could be so Magical
02:16 Tell me how you like it baby
02:20 Wanna hear you say my name
02:24 You deserve some satisfaction
02:28 Yeah, this right here could be so magical
        `,
        translation: `
00:16 Me hablas como si estuvieras loca, baby
00:20 Dime qué necesitas de mí
00:24 Quiero hacerte sentir mi pasión
00:29 Sí, esto de aquí podría ser algo mágico
00:33 Dime cómo te gusta baby
00:38 Quiero oírte decir mi nombre
00:42 Te mereces algo de satisfacción
00:46 Sí, esto de aquí podría ser algo mágico
00:50 Girando hacia ti lentamente
00:53 Niña, tengo algunas cosas que necesitas saber
00:58 Quiero hacerte sentir mi pasión
01:02 Sí, esto de aquí podría ser algo mágico
01:07 Dime cómo te gusta, baby
01:12 Quiero oírte decir mi nombre
01:16 Te mereces algo de satisfacción
01:20 Sí, esto de aquí podría ser algo mágico
01:24 Apaguemos las luces
01:26 no necesitamos ajustar el ambiente
01:29 Seguiremos toda la noche, niña, te prometo que aún no se termina
01:33 Nunca antes habías estado tan arriba
01:34 y no tienes que irte,
01:35 bien podrías pasar la noche
01:41 Niña, me importa toda tu energía
01:46 Y si estás dispuesta, entonces yo estoy dispuesto a ver
01:50 Cómo podemos llevar esto más lejos?
01:54 Siguiendo así, estoy intentando llegar a conocerte
01:59 Girando hacia ti lentamente
02:02 Niña, tengo algunas cosas que necesitas saber
02:07 Quiero hacerte sentir mi pasión
02:10 Sí, esto de aquí podría ser algo mágico
02:16 Dime cómo te gusta, baby
02:20 Quiero oírte decir mi nombre
02:24 Te mereces algo de satisfacción
02:28 Sí, esto de aquí podría ser algo mágico
        `
    },
    {
        title: "Stay here",
        artist: "Frvnchise Nights",
        file: "music/song4.mp3",
        lyrics: `
00:15 In my dreams
00:19 Wake up baby in my sheets
00:23 We go from your bed to the shower
00:25 From the shower to the floor
00:27 The floor nearest the counter
00:30 Oh, I need
00:34 It’s been to long since you left me
00:37 And I know it’s more to explore
00:39 Let me get my foot in the door
00:43 I’m hoping that you’ll stay, yeah, yeah...
00:48 Stay here, stay baby
00:51 Stay here, oh stay
00:55 Stay here, stay baby
00:59 Stay here, oh stay
01:03 Come here, please
01:07 Don’t wanna waste no time
01:09 I’m on the way right now
01:10 Cause we gotta get away right now
01:13 Just me and you baby
01:15 And the way that you move
01:17 Got me lost in the groove
01:19 And I’m just tryna get away with you
01:23 Oh, I need you here
01:27 I’m hoping that you’ll stay yeah yeah yeeeaaah
01:35 Stay here, stay baby
01:40 Stay here, oh stay
01:43 Stay here, stay baby
01:47 Stay here, oh stay
        `,
        translation: `
00:15 En mis sueños
00:19 Despierta, baby, en mis sábanas
00:23 Pasamos de tu cama a la ducha
00:25 De la ducha al suelo
00:27 El suelo más cercano al mostrador
00:30 Oh, lo necesito
00:34 Ha pasado mucho tiempo desde que me dejaste
00:37 Y sé que hay más por explorar
00:39 Déjame poner un pie en la puerta
00:43 Tengo la esperanza de que te quedes
00:48 Quédate aquí, quédate, baby
00:51 Quédate aquí, oh, quédate 
00:55 Quédate aquí, quédate, baby
00:59 Quédate aquí, oh, quédate 
01:03 Ven aquí, por favor
01:07 No quiero perder el tiempo
01:09 Voy en camino ahora mismo 
01:10 Porque tenemos que escapar de una vez
01:13 Solos tú y yo, baby
01:15 y la forma en que te mueves
01:17 Me tienes perdido en el ritmo
01:19 Y solo intento escaparme contigo
01:23 Oh, te necesito aquí
01:27 Tengo la esperanza de que te quedes
01:35 Quédate aquí, quédate, baby
01:40 Quédate aquí, oh, quédate
01:43 Quédate aquí, quédate, baby
01:47 Quédate aquí, oh, quédate
        `
    },
    {
        title: "This is the one",
        artist: "Frvnchise Nights",
        file: "music/song5.mp3",
        lyrics: `
00:17 Way I’m feeling you the one
00:19 All my body you is done
00:21 Put it on and you gon love it,
00:23 You gon love it, who ooh ooh
00:26 We both be playing dumb
00:28 I can’t say this isn’t fun
00:30 We both know what we came here to do
00:35 You, look better than all of them, ouh
00:41 Damn, girl, you make me proud
00:44 You, look better than all of them, ouh
00:50 There’s no one else around
00:52 This is the one, one, one… (x2)
01:08 I’ve been here before babe
01:11 You are your door, don’t wanna get attached
01:15 So let’s just call this one a match babe
01:17 This is the one, one, one… (x2)
01:36 You, look better than all of them, ouh
01:42 Damn, girl, you made me proud
01:45 You, look better than all of them, ouh
01:51 There’s no one else around
01:53 This is the one, one, one… (x2)
        `,
        translation: `
00:17 Como que estoy sintiendo que eres la indicada
00:19 Todo mi cuerpo, contigo ya está
00:21 Atrévete y te va a encantar,
00:23 Te va a encantar uh, uh, uuh
00:26 Hemos estado haciéndonos los tontos
00:28 No puedo decir que no sea divertido
00:30 Pero ambos sabemos a qué vinimos
00:35 Tú, te ves mejor que todas las demás, ouh
00:41 Cónchale, niña, me haces sentir orgulloso
00:44 Tú, te ves mejor que todas las demás 
00:50 No hay nadie más alrededor
00:52 Esta es la indicada (la indicada…)
01:08 He estado aquí antes, pero
01:11 Tú eres tu puerta, no quiero apegarme
01:15 Así que mejor llamemos a esto una coincidencia, babe
01:17 Esta es la indicada (la indicada…)
01:36 Tú, te ves mejor que todas las demás 
01:42 Maldición, niña, me haces sentir orgulloso
01:45 Tú, te ves mejor que todas las demás 
01:51 No hay nadie más alrededor 
01:53 Esta es la indicada (la indicada…)
        `
    }
];
