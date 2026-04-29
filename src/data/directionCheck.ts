export interface TaskOption {
  id: string;
  text: string;
  score: number;
}

export interface Task {
  id: string;
  question: string;
  options: TaskOption[];
}

export interface Level {
  level: number;
  tasks: Task[];
}

export interface CheckResult {
  type: 'positive' | 'negative';
  title: string;
  subtitle: string;
}

export const levels: Level[] = [
  {
    level: 1,
    tasks: [
      {
        id: 'l1t1',
        question: 'You keep postponing a task you know matters. What do you do?',
        options: [
          { id: 'l1t1a', text: 'Wait until you feel ready', score: 1 },
          { id: 'l1t1b', text: 'Break it into a smaller step and start', score: 3 },
          { id: 'l1t1c', text: 'Do something easier instead', score: 1 },
          { id: 'l1t1d', text: 'Start immediately, even without a plan', score: 2 },
        ],
      },
      {
        id: 'l1t2',
        question: 'You feel overwhelmed by multiple tasks.',
        options: [
          { id: 'l1t2a', text: 'Focus on one task only', score: 3 },
          { id: 'l1t2b', text: 'Ignore it and hope it goes away', score: 1 },
          { id: 'l1t2c', text: 'List everything and define the next step', score: 2 },
          { id: 'l1t2d', text: 'Think about all possible outcomes', score: 1 },
        ],
      },
      {
        id: 'l1t3',
        question: 'You made a mistake.',
        options: [
          { id: 'l1t3a', text: 'Analyze it briefly and move forward', score: 3 },
          { id: 'l1t3b', text: 'Keep thinking about it all day', score: 1 },
          { id: 'l1t3c', text: 'Accept it and continue working', score: 2 },
          { id: 'l1t3d', text: 'Avoid similar situations completely', score: 1 },
        ],
      },
      {
        id: 'l1t4',
        question: "You don't feel motivated.",
        options: [
          { id: 'l1t4a', text: 'Wait for motivation', score: 1 },
          { id: 'l1t4b', text: 'Start with a small action anyway', score: 3 },
          { id: 'l1t4c', text: 'Do nothing today', score: 1 },
          { id: 'l1t4d', text: 'Lower the barrier and begin', score: 2 },
        ],
      },
      {
        id: 'l1t5',
        question: 'A decision feels unclear.',
        options: [
          { id: 'l1t5a', text: 'Delay it', score: 1 },
          { id: 'l1t5b', text: 'Gather endless information', score: 1 },
          { id: 'l1t5c', text: 'Make a decision based on what you know', score: 3 },
          { id: 'l1t5d', text: 'Choose a direction and adjust later', score: 2 },
        ],
      },
      {
        id: 'l1t6',
        question: 'You are stuck in routine.',
        options: [
          { id: 'l1t6a', text: 'Keep doing the same', score: 1 },
          { id: 'l1t6b', text: 'Change one small behavior', score: 3 },
          { id: 'l1t6c', text: 'Overthink what to change', score: 1 },
          { id: 'l1t6d', text: 'Try something different today', score: 2 },
        ],
      },
    ],
  },
  {
    level: 2,
    tasks: [
      {
        id: 'l2t1',
        question: 'You have too many ideas.',
        options: [
          { id: 'l2t1a', text: 'Try all at once', score: 1 },
          { id: 'l2t1b', text: 'Pick one and commit', score: 3 },
          { id: 'l2t1c', text: 'Keep collecting ideas', score: 1 },
          { id: 'l2t1d', text: 'Focus on one and act', score: 2 },
        ],
      },
      {
        id: 'l2t2',
        question: 'You feel tired before starting.',
        options: [
          { id: 'l2t2a', text: 'Assume you need rest', score: 1 },
          { id: 'l2t2b', text: 'Start for 5 minutes', score: 3 },
          { id: 'l2t2c', text: 'Delay everything', score: 1 },
          { id: 'l2t2d', text: 'Test your energy with action', score: 2 },
        ],
      },
      {
        id: 'l2t3',
        question: 'Something feels difficult.',
        options: [
          { id: 'l2t3a', text: 'Avoid it', score: 1 },
          { id: 'l2t3b', text: 'Break it down', score: 3 },
          { id: 'l2t3c', text: 'Complain about it', score: 1 },
          { id: 'l2t3d', text: 'Start with the easiest part', score: 2 },
        ],
      },
      {
        id: 'l2t4',
        question: 'You keep rethinking the same thing.',
        options: [
          { id: 'l2t4a', text: 'Continue analyzing', score: 1 },
          { id: 'l2t4b', text: 'Make a decision', score: 3 },
          { id: 'l2t4c', text: 'Ask more opinions', score: 1 },
          { id: 'l2t4d', text: 'Move forward with current choice', score: 2 },
        ],
      },
      {
        id: 'l2t5',
        question: 'You lack clarity.',
        options: [
          { id: 'l2t5a', text: 'Wait for it', score: 1 },
          { id: 'l2t5b', text: 'Start acting', score: 3 },
          { id: 'l2t5c', text: 'Think longer', score: 1 },
          { id: 'l2t5d', text: 'Learn by doing', score: 2 },
        ],
      },
      {
        id: 'l2t6',
        question: 'You failed at something.',
        options: [
          { id: 'l2t6a', text: 'Quit', score: 1 },
          { id: 'l2t6b', text: 'Try again differently', score: 3 },
          { id: 'l2t6c', text: 'Blame circumstances', score: 1 },
          { id: 'l2t6d', text: 'Adjust approach and continue', score: 2 },
        ],
      },
    ],
  },
  {
    level: 3,
    tasks: [
      {
        id: 'l3t1',
        question: "You don't know where to start.",
        options: [
          { id: 'l3t1a', text: 'Do nothing', score: 1 },
          { id: 'l3t1b', text: 'Start anywhere', score: 3 },
          { id: 'l3t1c', text: 'Wait for perfect plan', score: 1 },
          { id: 'l3t1d', text: 'Take the simplest step', score: 2 },
        ],
      },
      {
        id: 'l3t2',
        question: 'You feel uncertain.',
        options: [
          { id: 'l3t2a', text: 'Stop', score: 1 },
          { id: 'l3t2b', text: 'Move forward anyway', score: 3 },
          { id: 'l3t2c', text: 'Wait for confidence', score: 1 },
          { id: 'l3t2d', text: 'Act despite uncertainty', score: 2 },
        ],
      },
      {
        id: 'l3t3',
        question: 'A task feels too big.',
        options: [
          { id: 'l3t3a', text: 'Avoid it', score: 1 },
          { id: 'l3t3b', text: 'Split it', score: 3 },
          { id: 'l3t3c', text: 'Overthink it', score: 1 },
          { id: 'l3t3d', text: 'Focus on one part', score: 2 },
        ],
      },
      {
        id: 'l3t4',
        question: 'You keep delaying.',
        options: [
          { id: 'l3t4a', text: 'Accept delay', score: 1 },
          { id: 'l3t4b', text: 'Force a small start', score: 3 },
          { id: 'l3t4c', text: 'Wait more', score: 1 },
          { id: 'l3t4d', text: 'Remove distractions and begin', score: 2 },
        ],
      },
      {
        id: 'l3t5',
        question: 'You doubt your decision.',
        options: [
          { id: 'l3t5a', text: 'Change it instantly', score: 1 },
          { id: 'l3t5b', text: 'Stick and test it', score: 3 },
          { id: 'l3t5c', text: 'Overanalyze', score: 1 },
          { id: 'l3t5d', text: 'Evaluate after action', score: 2 },
        ],
      },
      {
        id: 'l3t6',
        question: 'You feel stuck mentally.',
        options: [
          { id: 'l3t6a', text: 'Think more', score: 1 },
          { id: 'l3t6b', text: 'Take action', score: 3 },
          { id: 'l3t6c', text: 'Scroll/social distraction', score: 1 },
          { id: 'l3t6d', text: 'Do something physical', score: 2 },
        ],
      },
    ],
  },
  {
    level: 4,
    tasks: [
      {
        id: 'l4t1',
        question: "You're overthinking a simple task.",
        options: [
          { id: 'l4t1a', text: 'Continue thinking', score: 1 },
          { id: 'l4t1b', text: 'Just do it', score: 3 },
          { id: 'l4t1c', text: 'Delay it', score: 1 },
          { id: 'l4t1d', text: 'Limit thinking and act', score: 2 },
        ],
      },
      {
        id: 'l4t2',
        question: 'You feel uncomfortable.',
        options: [
          { id: 'l4t2a', text: 'Avoid it', score: 1 },
          { id: 'l4t2b', text: 'Face it briefly', score: 3 },
          { id: 'l4t2c', text: 'Escape', score: 1 },
          { id: 'l4t2d', text: 'Lean into discomfort', score: 2 },
        ],
      },
      {
        id: 'l4t3',
        question: 'You want better results.',
        options: [
          { id: 'l4t3a', text: 'Wait for perfect conditions', score: 1 },
          { id: 'l4t3b', text: 'Improve through action', score: 3 },
          { id: 'l4t3c', text: 'Plan endlessly', score: 1 },
          { id: 'l4t3d', text: 'Iterate while doing', score: 2 },
        ],
      },
      {
        id: 'l4t4',
        question: 'You feel pressure.',
        options: [
          { id: 'l4t4a', text: 'Freeze', score: 1 },
          { id: 'l4t4b', text: 'Focus on next step', score: 3 },
          { id: 'l4t4c', text: 'Overreact', score: 1 },
          { id: 'l4t4d', text: 'Simplify the situation', score: 2 },
        ],
      },
      {
        id: 'l4t5',
        question: 'You lack progress.',
        options: [
          { id: 'l4t5a', text: 'Complain', score: 1 },
          { id: 'l4t5b', text: 'Take small steps', score: 3 },
          { id: 'l4t5c', text: 'Quit', score: 1 },
          { id: 'l4t5d', text: 'Build consistency', score: 2 },
        ],
      },
      {
        id: 'l4t6',
        question: 'You hesitate before action.',
        options: [
          { id: 'l4t6a', text: 'Wait', score: 1 },
          { id: 'l4t6b', text: 'Start anyway', score: 3 },
          { id: 'l4t6c', text: 'Delay decision', score: 1 },
          { id: 'l4t6d', text: 'Reduce thinking time', score: 2 },
        ],
      },
    ],
  },
  {
    level: 5,
    tasks: [
      {
        id: 'l5t1',
        question: 'You keep starting but not finishing.',
        options: [
          { id: 'l5t1a', text: 'Start new things', score: 1 },
          { id: 'l5t1b', text: 'Finish one task', score: 3 },
          { id: 'l5t1c', text: 'Jump between tasks', score: 1 },
          { id: 'l5t1d', text: 'Prioritize completion', score: 2 },
        ],
      },
      {
        id: 'l5t2',
        question: 'You feel lost.',
        options: [
          { id: 'l5t2a', text: 'Wait for direction', score: 1 },
          { id: 'l5t2b', text: 'Choose a direction', score: 3 },
          { id: 'l5t2c', text: 'Avoid decisions', score: 1 },
          { id: 'l5t2d', text: 'Move and adjust', score: 2 },
        ],
      },
      {
        id: 'l5t3',
        question: 'You overcomplicate things.',
        options: [
          { id: 'l5t3a', text: 'Add more steps', score: 1 },
          { id: 'l5t3b', text: 'Simplify', score: 3 },
          { id: 'l5t3c', text: 'Think deeper', score: 1 },
          { id: 'l5t3d', text: 'Focus on essentials', score: 2 },
        ],
      },
      {
        id: 'l5t4',
        question: 'You lack consistency.',
        options: [
          { id: 'l5t4a', text: 'Work randomly', score: 1 },
          { id: 'l5t4b', text: 'Build small habits', score: 3 },
          { id: 'l5t4c', text: 'Wait for motivation', score: 1 },
          { id: 'l5t4d', text: 'Repeat simple actions', score: 2 },
        ],
      },
      {
        id: 'l5t5',
        question: 'You avoid discomfort.',
        options: [
          { id: 'l5t5a', text: 'Stay comfortable', score: 1 },
          { id: 'l5t5b', text: 'Do one hard thing', score: 3 },
          { id: 'l5t5c', text: 'Delay', score: 1 },
          { id: 'l5t5d', text: 'Increase tolerance', score: 2 },
        ],
      },
      {
        id: 'l5t6',
        question: 'You hesitate to act.',
        options: [
          { id: 'l5t6a', text: 'Wait longer', score: 1 },
          { id: 'l5t6b', text: 'Act now', score: 3 },
          { id: 'l5t6c', text: 'Think more', score: 1 },
          { id: 'l5t6d', text: 'Reduce hesitation', score: 2 },
        ],
      },
    ],
  },
  {
    level: 6,
    tasks: [
      {
        id: 'l6t1',
        question: 'You keep checking the same thing repeatedly.',
        options: [
          { id: 'l6t1a', text: 'Double-check again', score: 1 },
          { id: 'l6t1b', text: 'Trust your first result', score: 3 },
          { id: 'l6t1c', text: 'Ask someone else again', score: 1 },
          { id: 'l6t1d', text: 'Move on and accept uncertainty', score: 2 },
        ],
      },
      {
        id: 'l6t2',
        question: 'You feel like nothing is progressing fast enough.',
        options: [
          { id: 'l6t2a', text: 'Quit early', score: 1 },
          { id: 'l6t2b', text: 'Stay consistent with small steps', score: 3 },
          { id: 'l6t2c', text: 'Increase effort randomly', score: 1 },
          { id: 'l6t2d', text: 'Focus on process, not speed', score: 2 },
        ],
      },
      {
        id: 'l6t3',
        question: "You don't feel confident in your work.",
        options: [
          { id: 'l6t3a', text: 'Stop and wait', score: 1 },
          { id: 'l6t3b', text: 'Share it anyway', score: 3 },
          { id: 'l6t3c', text: 'Keep hiding it', score: 1 },
          { id: 'l6t3d', text: 'Improve through feedback', score: 2 },
        ],
      },
      {
        id: 'l6t4',
        question: 'You have too many unfinished tasks.',
        options: [
          { id: 'l6t4a', text: 'Start a new one', score: 1 },
          { id: 'l6t4b', text: 'Pick one and complete it', score: 3 },
          { id: 'l6t4c', text: 'Jump between them', score: 1 },
          { id: 'l6t4d', text: 'Reduce scope and finish', score: 2 },
        ],
      },
      {
        id: 'l6t5',
        question: 'You feel distracted.',
        options: [
          { id: 'l6t5a', text: 'Follow distractions', score: 1 },
          { id: 'l6t5b', text: 'Remove one distraction', score: 3 },
          { id: 'l6t5c', text: 'Try multitasking', score: 1 },
          { id: 'l6t5d', text: 'Focus on one task', score: 2 },
        ],
      },
      {
        id: 'l6t6',
        question: 'You hesitate before sending or publishing something.',
        options: [
          { id: 'l6t6a', text: 'Rewrite endlessly', score: 1 },
          { id: 'l6t6b', text: 'Send it', score: 3 },
          { id: 'l6t6c', text: 'Wait for better version', score: 1 },
          { id: 'l6t6d', text: 'Accept imperfection and publish', score: 2 },
        ],
      },
    ],
  },
  {
    level: 7,
    tasks: [
      {
        id: 'l7t1',
        question: "You don't see immediate results.",
        options: [
          { id: 'l7t1a', text: 'Stop', score: 1 },
          { id: 'l7t1b', text: 'Continue anyway', score: 3 },
          { id: 'l7t1c', text: 'Change everything', score: 1 },
          { id: 'l7t1d', text: 'Trust gradual progress', score: 2 },
        ],
      },
      {
        id: 'l7t2',
        question: 'You feel mentally blocked.',
        options: [
          { id: 'l7t2a', text: 'Sit and think', score: 1 },
          { id: 'l7t2b', text: 'Change environment', score: 3 },
          { id: 'l7t2c', text: 'Wait for clarity', score: 1 },
          { id: 'l7t2d', text: 'Do a small unrelated action', score: 2 },
        ],
      },
      {
        id: 'l7t3',
        question: 'You want to improve something.',
        options: [
          { id: 'l7t3a', text: 'Wait for time', score: 1 },
          { id: 'l7t3b', text: 'Start small improvements', score: 3 },
          { id: 'l7t3c', text: 'Plan big changes only', score: 1 },
          { id: 'l7t3d', text: 'Iterate step by step', score: 2 },
        ],
      },
      {
        id: 'l7t4',
        question: 'You compare yourself to others.',
        options: [
          { id: 'l7t4a', text: 'Stop trying', score: 1 },
          { id: 'l7t4b', text: 'Refocus on your progress', score: 3 },
          { id: 'l7t4c', text: 'Overanalyze others', score: 1 },
          { id: 'l7t4d', text: 'Use comparison as reference', score: 2 },
        ],
      },
      {
        id: 'l7t5',
        question: 'You feel uncertain about outcome.',
        options: [
          { id: 'l7t5a', text: 'Avoid action', score: 1 },
          { id: 'l7t5b', text: 'Test your idea', score: 3 },
          { id: 'l7t5c', text: 'Wait for guarantees', score: 1 },
          { id: 'l7t5d', text: 'Learn through execution', score: 2 },
        ],
      },
      {
        id: 'l7t6',
        question: 'You delay starting something new.',
        options: [
          { id: 'l7t6a', text: 'Keep waiting', score: 1 },
          { id: 'l7t6b', text: 'Begin with a small version', score: 3 },
          { id: 'l7t6c', text: 'Research endlessly', score: 1 },
          { id: 'l7t6d', text: 'Try and adjust', score: 2 },
        ],
      },
    ],
  },
  {
    level: 8,
    tasks: [
      {
        id: 'l8t1',
        question: "You feel like you're doing too little.",
        options: [
          { id: 'l8t1a', text: 'Overload yourself', score: 1 },
          { id: 'l8t1b', text: 'Increase gradually', score: 3 },
          { id: 'l8t1c', text: 'Do nothing', score: 1 },
          { id: 'l8t1d', text: 'Stay consistent', score: 2 },
        ],
      },
      {
        id: 'l8t2',
        question: 'You overanalyze simple tasks.',
        options: [
          { id: 'l8t2a', text: 'Keep thinking', score: 1 },
          { id: 'l8t2b', text: 'Limit thinking time', score: 3 },
          { id: 'l8t2c', text: 'Delay', score: 1 },
          { id: 'l8t2d', text: 'Act quickly', score: 2 },
        ],
      },
      {
        id: 'l8t3',
        question: 'You feel stuck in a loop.',
        options: [
          { id: 'l8t3a', text: 'Repeat same actions', score: 1 },
          { id: 'l8t3b', text: 'Change one variable', score: 3 },
          { id: 'l8t3c', text: 'Wait', score: 1 },
          { id: 'l8t3d', text: 'Try a different approach', score: 2 },
        ],
      },
      {
        id: 'l8t4',
        question: 'You struggle to focus.',
        options: [
          { id: 'l8t4a', text: 'Do everything', score: 1 },
          { id: 'l8t4b', text: 'Define one priority', score: 3 },
          { id: 'l8t4c', text: 'Switch constantly', score: 1 },
          { id: 'l8t4d', text: 'Work in short bursts', score: 2 },
        ],
      },
      {
        id: 'l8t5',
        question: 'You feel pressure to be perfect.',
        options: [
          { id: 'l8t5a', text: 'Wait', score: 1 },
          { id: 'l8t5b', text: 'Deliver anyway', score: 3 },
          { id: 'l8t5c', text: 'Overwork', score: 1 },
          { id: 'l8t5d', text: 'Accept good enough', score: 2 },
        ],
      },
      {
        id: 'l8t6',
        question: "You don't know if something will work.",
        options: [
          { id: 'l8t6a', text: 'Avoid it', score: 1 },
          { id: 'l8t6b', text: 'Test quickly', score: 3 },
          { id: 'l8t6c', text: 'Wait longer', score: 1 },
          { id: 'l8t6d', text: 'Learn by doing', score: 2 },
        ],
      },
    ],
  },
  {
    level: 9,
    tasks: [
      {
        id: 'l9t1',
        question: 'You feel like quitting.',
        options: [
          { id: 'l9t1a', text: 'Stop immediately', score: 1 },
          { id: 'l9t1b', text: 'Take a short pause', score: 3 },
          { id: 'l9t1c', text: 'Ignore everything', score: 1 },
          { id: 'l9t1d', text: 'Continue with smaller effort', score: 2 },
        ],
      },
      {
        id: 'l9t2',
        question: "You're unsure about your next move.",
        options: [
          { id: 'l9t2a', text: 'Wait', score: 1 },
          { id: 'l9t2b', text: 'Choose one option', score: 3 },
          { id: 'l9t2c', text: 'Delay', score: 1 },
          { id: 'l9t2d', text: 'Move and adapt', score: 2 },
        ],
      },
      {
        id: 'l9t3',
        question: "You feel like you're not improving.",
        options: [
          { id: 'l9t3a', text: 'Quit', score: 1 },
          { id: 'l9t3b', text: 'Track small progress', score: 3 },
          { id: 'l9t3c', text: 'Compare constantly', score: 1 },
          { id: 'l9t3d', text: 'Keep practicing', score: 2 },
        ],
      },
      {
        id: 'l9t4',
        question: 'You feel overwhelmed by expectations.',
        options: [
          { id: 'l9t4a', text: 'Ignore everything', score: 1 },
          { id: 'l9t4b', text: 'Reduce expectations', score: 3 },
          { id: 'l9t4c', text: 'Overwork', score: 1 },
          { id: 'l9t4d', text: 'Focus on one step', score: 2 },
        ],
      },
      {
        id: 'l9t5',
        question: 'You feel mentally tired.',
        options: [
          { id: 'l9t5a', text: 'Stop everything', score: 1 },
          { id: 'l9t5b', text: 'Switch to lighter task', score: 3 },
          { id: 'l9t5c', text: 'Force heavy work', score: 1 },
          { id: 'l9t5d', text: 'Maintain movement', score: 2 },
        ],
      },
      {
        id: 'l9t6',
        question: 'You hesitate to take risk.',
        options: [
          { id: 'l9t6a', text: 'Avoid it', score: 1 },
          { id: 'l9t6b', text: 'Take controlled risk', score: 3 },
          { id: 'l9t6c', text: 'Wait forever', score: 1 },
          { id: 'l9t6d', text: 'Test small risk', score: 2 },
        ],
      },
    ],
  },
  {
    level: 10,
    tasks: [
      {
        id: 'l10t1',
        question: 'You want to restart something.',
        options: [
          { id: 'l10t1a', text: 'Wait for perfect moment', score: 1 },
          { id: 'l10t1b', text: 'Start now', score: 3 },
          { id: 'l10t1c', text: 'Plan endlessly', score: 1 },
          { id: 'l10t1d', text: 'Begin small', score: 2 },
        ],
      },
      {
        id: 'l10t2',
        question: 'You feel stuck in thinking.',
        options: [
          { id: 'l10t2a', text: 'Think more', score: 1 },
          { id: 'l10t2b', text: 'Act', score: 3 },
          { id: 'l10t2c', text: 'Wait', score: 1 },
          { id: 'l10t2d', text: 'Move physically', score: 2 },
        ],
      },
      {
        id: 'l10t3',
        question: 'You have limited time.',
        options: [
          { id: 'l10t3a', text: 'Do nothing', score: 1 },
          { id: 'l10t3b', text: 'Use small time blocks', score: 3 },
          { id: 'l10t3c', text: 'Wait for more time', score: 1 },
          { id: 'l10t3d', text: 'Prioritize one thing', score: 2 },
        ],
      },
      {
        id: 'l10t4',
        question: 'You feel like progress is invisible.',
        options: [
          { id: 'l10t4a', text: 'Stop', score: 1 },
          { id: 'l10t4b', text: 'Keep going', score: 3 },
          { id: 'l10t4c', text: 'Doubt everything', score: 1 },
          { id: 'l10t4d', text: 'Trust process', score: 2 },
        ],
      },
      {
        id: 'l10t5',
        question: 'You struggle to finish things.',
        options: [
          { id: 'l10t5a', text: 'Start new tasks', score: 1 },
          { id: 'l10t5b', text: 'Focus on completion', score: 3 },
          { id: 'l10t5c', text: 'Jump around', score: 1 },
          { id: 'l10t5d', text: 'Limit tasks', score: 2 },
        ],
      },
      {
        id: 'l10t6',
        question: 'You delay action again.',
        options: [
          { id: 'l10t6a', text: 'Accept delay', score: 1 },
          { id: 'l10t6b', text: 'Act immediately', score: 3 },
          { id: 'l10t6c', text: 'Wait', score: 1 },
          { id: 'l10t6d', text: 'Reduce friction and start', score: 2 },
        ],
      },
    ],
  },
  {
    level: 11,
    tasks: [
      {
        id: 'l11t1',
        question: 'You keep preparing but never starting.',
        options: [
          { id: 'l11t1a', text: 'Keep improving the plan', score: 1 },
          { id: 'l11t1b', text: 'Set a hard start time', score: 3 },
          { id: 'l11t1c', text: 'Add more details', score: 1 },
          { id: 'l11t1d', text: 'Start with an incomplete version', score: 2 },
        ],
      },
      {
        id: 'l11t2',
        question: "You feel like you're doing a lot but nothing changes.",
        options: [
          { id: 'l11t2a', text: 'Do even more tasks', score: 1 },
          { id: 'l11t2b', text: 'Review what actually moves results', score: 3 },
          { id: 'l11t2c', text: 'Stay busy', score: 1 },
          { id: 'l11t2d', text: 'Cut low-impact actions', score: 2 },
        ],
      },
      {
        id: 'l11t3',
        question: "You're unsure if your approach is right.",
        options: [
          { id: 'l11t3a', text: 'Stop everything', score: 1 },
          { id: 'l11t3b', text: 'Test it in a small way', score: 3 },
          { id: 'l11t3c', text: 'Wait for certainty', score: 1 },
          { id: 'l11t3d', text: 'Adjust while moving', score: 2 },
        ],
      },
      {
        id: 'l11t4',
        question: 'You feel resistance before a task.',
        options: [
          { id: 'l11t4a', text: 'Avoid it', score: 1 },
          { id: 'l11t4b', text: 'Start for a fixed short time', score: 3 },
          { id: 'l11t4c', text: 'Delay again', score: 1 },
          { id: 'l11t4d', text: 'Lower the difficulty and begin', score: 2 },
        ],
      },
      {
        id: 'l11t5',
        question: 'You keep switching between ideas.',
        options: [
          { id: 'l11t5a', text: 'Explore more options', score: 1 },
          { id: 'l11t5b', text: 'Lock one for now', score: 3 },
          { id: 'l11t5c', text: 'Stay flexible always', score: 1 },
          { id: 'l11t5d', text: 'Commit for a limited time', score: 2 },
        ],
      },
      {
        id: 'l11t6',
        question: 'You want better results quickly.',
        options: [
          { id: 'l11t6a', text: 'Increase pressure', score: 1 },
          { id: 'l11t6b', text: 'Improve one variable', score: 3 },
          { id: 'l11t6c', text: 'Rush everything', score: 1 },
          { id: 'l11t6d', text: 'Optimize gradually', score: 2 },
        ],
      },
    ],
  },
  {
    level: 12,
    tasks: [
      {
        id: 'l12t1',
        question: 'You feel like nothing is clear.',
        options: [
          { id: 'l12t1a', text: 'Wait for clarity', score: 1 },
          { id: 'l12t1b', text: 'Define a temporary direction', score: 3 },
          { id: 'l12t1c', text: 'Keep thinking', score: 1 },
          { id: 'l12t1d', text: 'Move and refine', score: 2 },
        ],
      },
      {
        id: 'l12t2',
        question: 'You hesitate to show your work.',
        options: [
          { id: 'l12t2a', text: 'Hide it longer', score: 1 },
          { id: 'l12t2b', text: 'Share with a small audience', score: 3 },
          { id: 'l12t2c', text: 'Wait for perfection', score: 1 },
          { id: 'l12t2d', text: 'Use feedback to improve', score: 2 },
        ],
      },
      {
        id: 'l12t3',
        question: "You feel like you're behind.",
        options: [
          { id: 'l12t3a', text: 'Panic and rush', score: 1 },
          { id: 'l12t3b', text: 'Focus on your next step', score: 3 },
          { id: 'l12t3c', text: 'Compare constantly', score: 1 },
          { id: 'l12t3d', text: 'Ignore the timeline and act', score: 2 },
        ],
      },
      {
        id: 'l12t4',
        question: 'You get distracted easily.',
        options: [
          { id: 'l12t4a', text: 'Accept it', score: 1 },
          { id: 'l12t4b', text: 'Reduce input sources', score: 3 },
          { id: 'l12t4c', text: 'Multitask more', score: 1 },
          { id: 'l12t4d', text: 'Create a focused window', score: 2 },
        ],
      },
      {
        id: 'l12t5',
        question: 'You doubt your ability.',
        options: [
          { id: 'l12t5a', text: 'Stop trying', score: 1 },
          { id: 'l12t5b', text: 'Build confidence through action', score: 3 },
          { id: 'l12t5c', text: 'Wait for validation', score: 1 },
          { id: 'l12t5d', text: 'Use repetition', score: 2 },
        ],
      },
      {
        id: 'l12t6',
        question: 'You feel like restarting everything.',
        options: [
          { id: 'l12t6a', text: 'Delete all progress', score: 1 },
          { id: 'l12t6b', text: 'Keep what works', score: 3 },
          { id: 'l12t6c', text: 'Start from zero', score: 1 },
          { id: 'l12t6d', text: 'Adjust instead of resetting', score: 2 },
        ],
      },
    ],
  },
  {
    level: 13,
    tasks: [
      {
        id: 'l13t1',
        question: "You're stuck choosing between options.",
        options: [
          { id: 'l13t1a', text: 'Wait longer', score: 1 },
          { id: 'l13t1b', text: 'Choose one and test', score: 3 },
          { id: 'l13t1c', text: 'Ask more opinions', score: 1 },
          { id: 'l13t1d', text: 'Limit time for decision', score: 2 },
        ],
      },
      {
        id: 'l13t2',
        question: "You feel like you've lost momentum.",
        options: [
          { id: 'l13t2a', text: 'Stop', score: 1 },
          { id: 'l13t2b', text: 'Restart with a small step', score: 3 },
          { id: 'l13t2c', text: 'Wait for motivation', score: 1 },
          { id: 'l13t2d', text: 'Build rhythm again', score: 2 },
        ],
      },
      {
        id: 'l13t3',
        question: 'You keep avoiding feedback.',
        options: [
          { id: 'l13t3a', text: 'Ignore it', score: 1 },
          { id: 'l13t3b', text: 'Ask for targeted feedback', score: 3 },
          { id: 'l13t3c', text: 'Wait until ready', score: 1 },
          { id: 'l13t3d', text: 'Use feedback to iterate', score: 2 },
        ],
      },
      {
        id: 'l13t4',
        question: 'You feel overwhelmed by complexity.',
        options: [
          { id: 'l13t4a', text: 'Accept chaos', score: 1 },
          { id: 'l13t4b', text: 'Simplify the system', score: 3 },
          { id: 'l13t4c', text: 'Add more structure', score: 1 },
          { id: 'l13t4d', text: 'Focus on core elements', score: 2 },
        ],
      },
      {
        id: 'l13t5',
        question: 'You delay finishing.',
        options: [
          { id: 'l13t5a', text: 'Add more improvements', score: 1 },
          { id: 'l13t5b', text: 'Define "done" clearly', score: 3 },
          { id: 'l13t5c', text: 'Keep adjusting', score: 1 },
          { id: 'l13t5d', text: 'Finish and move on', score: 2 },
        ],
      },
      {
        id: 'l13t6',
        question: 'You question your direction.',
        options: [
          { id: 'l13t6a', text: 'Drop everything', score: 1 },
          { id: 'l13t6b', text: 'Reconfirm your goal', score: 3 },
          { id: 'l13t6c', text: 'Drift randomly', score: 1 },
          { id: 'l13t6d', text: 'Align actions with goal', score: 2 },
        ],
      },
    ],
  },
  {
    level: 14,
    tasks: [
      {
        id: 'l14t1',
        question: "You feel like effort doesn't match results.",
        options: [
          { id: 'l14t1a', text: 'Quit', score: 1 },
          { id: 'l14t1b', text: 'Analyze effectiveness', score: 3 },
          { id: 'l14t1c', text: 'Push harder blindly', score: 1 },
          { id: 'l14t1d', text: 'Adjust strategy', score: 2 },
        ],
      },
      {
        id: 'l14t2',
        question: 'You avoid starting difficult tasks.',
        options: [
          { id: 'l14t2a', text: 'Skip them', score: 1 },
          { id: 'l14t2b', text: 'Schedule them first', score: 3 },
          { id: 'l14t2c', text: 'Delay', score: 1 },
          { id: 'l14t2d', text: 'Reduce entry barrier', score: 2 },
        ],
      },
      {
        id: 'l14t3',
        question: "You feel like you're repeating mistakes.",
        options: [
          { id: 'l14t3a', text: 'Ignore pattern', score: 1 },
          { id: 'l14t3b', text: 'Identify the cause', score: 3 },
          { id: 'l14t3c', text: 'Blame situation', score: 1 },
          { id: 'l14t3d', text: 'Change behavior', score: 2 },
        ],
      },
      {
        id: 'l14t4',
        question: 'You feel uncertain about progress.',
        options: [
          { id: 'l14t4a', text: 'Stop tracking', score: 1 },
          { id: 'l14t4b', text: 'Measure small wins', score: 3 },
          { id: 'l14t4c', text: 'Guess', score: 1 },
          { id: 'l14t4d', text: 'Review progress regularly', score: 2 },
        ],
      },
      {
        id: 'l14t5',
        question: 'You feel pressure to do everything.',
        options: [
          { id: 'l14t5a', text: 'Try all tasks', score: 1 },
          { id: 'l14t5b', text: 'Prioritize', score: 3 },
          { id: 'l14t5c', text: 'Overload yourself', score: 1 },
          { id: 'l14t5d', text: 'Drop non-essential', score: 2 },
        ],
      },
      {
        id: 'l14t6',
        question: 'You hesitate to commit.',
        options: [
          { id: 'l14t6a', text: 'Stay flexible', score: 1 },
          { id: 'l14t6b', text: 'Commit temporarily', score: 3 },
          { id: 'l14t6c', text: 'Avoid decisions', score: 1 },
          { id: 'l14t6d', text: 'Test commitment', score: 2 },
        ],
      },
    ],
  },
  {
    level: 15,
    tasks: [
      {
        id: 'l15t1',
        question: "You feel like you're overthinking again.",
        options: [
          { id: 'l15t1a', text: 'Continue', score: 1 },
          { id: 'l15t1b', text: 'Set a decision limit', score: 3 },
          { id: 'l15t1c', text: 'Delay', score: 1 },
          { id: 'l15t1d', text: 'Act after limit', score: 2 },
        ],
      },
      {
        id: 'l15t2',
        question: "You don't trust your judgment.",
        options: [
          { id: 'l15t2a', text: 'Ignore it', score: 1 },
          { id: 'l15t2b', text: 'Validate through action', score: 3 },
          { id: 'l15t2c', text: 'Ask endlessly', score: 1 },
          { id: 'l15t2d', text: 'Build trust gradually', score: 2 },
        ],
      },
      {
        id: 'l15t3',
        question: 'You feel like stopping halfway.',
        options: [
          { id: 'l15t3a', text: 'Quit', score: 1 },
          { id: 'l15t3b', text: 'Reduce scope', score: 3 },
          { id: 'l15t3c', text: 'Start something new', score: 1 },
          { id: 'l15t3d', text: 'Push to completion', score: 2 },
        ],
      },
      {
        id: 'l15t4',
        question: 'You feel like progress is slow.',
        options: [
          { id: 'l15t4a', text: 'Rush', score: 1 },
          { id: 'l15t4b', text: 'Stay consistent', score: 3 },
          { id: 'l15t4c', text: 'Switch approach randomly', score: 1 },
          { id: 'l15t4d', text: 'Focus on long-term', score: 2 },
        ],
      },
      {
        id: 'l15t5',
        question: "You're unsure if it's worth it.",
        options: [
          { id: 'l15t5a', text: 'Stop', score: 1 },
          { id: 'l15t5b', text: 'Continue short-term', score: 3 },
          { id: 'l15t5c', text: 'Wait for certainty', score: 1 },
          { id: 'l15t5d', text: 'Evaluate after action', score: 2 },
        ],
      },
      {
        id: 'l15t6',
        question: 'You hesitate one last time before acting.',
        options: [
          { id: 'l15t6a', text: 'Delay', score: 1 },
          { id: 'l15t6b', text: 'Start now', score: 3 },
          { id: 'l15t6c', text: 'Think more', score: 1 },
          { id: 'l15t6d', text: 'Remove friction and begin', score: 2 },
        ],
      },
    ],
  },
];

export function getResult(totalScore: number, maxScore: number): CheckResult {
  const percentage = totalScore / maxScore;
  if (percentage >= 0.7) {
    return {
      type: 'positive',
      title: "You're on the right track",
      subtitle: 'Your choices move things forward. Not perfect — but effective.',
    };
  }
  return {
    type: 'negative',
    title: "You're holding yourself back",
    subtitle: 'Your choices are keeping things where they are.',
  };
}