export type TimeLineEventType = '業務' | 'イベント' | '資格'

type BaseTimeLineItem = {
  time: string
  type: TimeLineEventType
  contents: string
}

export type TimeLineEvent = BaseTimeLineItem
export type TimeLineCertification = BaseTimeLineItem

export type TimeLineWork = BaseTimeLineItem & {
  title: string
  technique: string[]
  phase: string[]
}

export type TimeLineItem = TimeLineEvent | TimeLineCertification | TimeLineWork

export const typeToColor = (type: TimeLineEventType) => {
  switch (type) {
    case '業務':
      return 'red'
    case 'イベント':
      return 'blue'
    case '資格':
      return 'teal'
    default:
      return 'grey'
  }
}
