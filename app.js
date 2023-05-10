const engine = Matter.Engine.create();
const mouse = Matter.Mouse.create(document.body);
const mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse
});

var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Composite = Matter.Composite,
        Constraint = Matter.Constraint,
        Bodies = Matter.Bodies;

const renderer = Matter.Render.create({

    element: document.body,
    engine: engine,
    mouse: mouse,

    options: {
        width: innerWidth,
        height: innerHeight,
        wireframes: false,
        background: 'lightgreen'
       
    }
});

const phoneOutline = Matter.Bodies.rectangle(200, 400, 300, 600, {
   isStatic: true,
    render: {
        fillStyle: 'limegreen',
        strokeStyle: 'black'
    }
});

const screen = Matter.Bodies.rectangle(200, 400, 250, 500, {
    isStatic: true,
    render: {
        fillStyle: 'lightblue',
        strokeStyle: 'black'
    }
});

const icon1 = Matter.Bodies.rectangle(150, 350, 40, 40, {
    isStatic: true,
    render: {
        fillStyle: 'limegreen',
        strokeStyle: 'black'
    }
});
const icon2 = Matter.Bodies.rectangle(250, 350, 40, 40, {
    isStatic: true,
    render: {
        fillStyle: 'limegreen',
        strokeStyle: 'black'
    }
});
const icon3 = Matter.Bodies.rectangle(350, 350, 40, 40, {
    fillStyle: 'limegreen',
    isStatic: true
});
const icon4 = Matter.Bodies.rectangle(150, 450, 40, 40, {
    isStatic: true,
    render: {
        fillStyle: 'limegreen',
        strokeStyle: 'black'
    }
});
const icon5 = Matter.Bodies.rectangle(250, 450, 40, 40, {
    isStatic: true,
    render: {
        fillStyle: 'limegreen',
        strokeStyle: 'black'
    }
});
const icon6 = Matter.Bodies.rectangle(350, 450, 40, 40, {
    fillStyle: 'limegreen',
    isStatic: true
});
const icon7 = Matter.Bodies.rectangle(150, 550, 40, 40, {
   
    isStatic: true,
    render: {
        fillStyle: 'limegreen',
        strokeStyle: 'black'
    }
});
const icon8 = Matter.Bodies.rectangle(250, 550, 40, 40, {
    isStatic: true,
    render: {
        fillStyle: 'green',
        strokeStyle: 'black'
    },
    url: "https://www.phone.com"
});









const phoneBody = Matter.Body.create({
    parts: [phoneOutline, screen, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8]
});

const body = phoneBody;

const constraint = Matter.Constraint.create({
    pointA: { x: body.position.x, y: body.position.y },
    pointB: { x: 0, y: 0 },
    bodyB: body,
    stiffness: .001
  });


window.onresize = function(){ location.reload(); }

Matter.World.add(engine.world, constraint);
Matter.World.add(engine.world, phoneBody);
Matter.World.add(engine.world, mouseConstraint);

Matter.Engine.run(engine);
Matter.Render.run(renderer);