import {
  trigger,
  animate,
  style,
  group,
  animateChild,
  query,
  stagger,
  transition
} from "@angular/animations";

export const blockAnimations = [
  trigger("block", [
    transition("* => *", [
      style({ transform: "scale(0,0)" }),
      animate("800ms 200ms ease", style({ transform: "scale(1,1)" }))
    ])
  ])
];

export const routerAnimations = [
  trigger("routerAnimations", [
    transition("* <=> *", [
      query(":enter", style({ display: 'block', opacity: 0 }), { optional: true }),


        query(
          ":leave",
          [animate("0.3s 100ms ease-in-out", style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ":enter",
          [animate("0.3s  ease-in-out", style({ opacity: 1 }))],
          { optional: true }
        )

    ])
  ])
];
