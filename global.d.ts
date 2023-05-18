declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    QyButton: typeof import('@chenwei02/qy-element')['QyButton']
    QyBreadcrumb: typeof import('@chenwei02/qy-element')['QyBreadcrumb']
    QyBreadcrumbItem: typeof import('@chenwei02/qy-element')['QyBreadcrumbItem']
    QyInput: typeof import('@chenwei02/qy-element')['QyInput']
    QyIcon: typeof import('@chenwei02/qy-element')['QyIcon']
    QyRadio: typeof import('@chenwei02/qy-element')['QyRadio']
    QyRadioGroup: typeof import('@chenwei02/qy-element')['QyRadioGroup']
    QyRadioButton: typeof import('@chenwei02/qy-element')['QyRadioButton']
  }
  // interface ComponentCustomProperties{

  // }
}
// export {}
