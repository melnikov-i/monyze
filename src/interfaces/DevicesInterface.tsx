interface DeviceTableIconInterface {
  icon: string,
}

export interface CurrentLoadInterface {
  state: string,
  lastconn: number,
  loading: {
    cpu: string,
    ram: string,
  }
}

export interface DevicesTableInterface {
  icon: DeviceTableIconInterface['icon'],
  comp_name: string,
  ip: string,
  system: string,
  cpu_name: string,
  memory: string;
  to: string,
}

export interface DActionAnchorClickedInterface {
  isClicked: boolean,
}

export interface DLoadAndStateInterfaces {
  id: string,
  params: CurrentLoadInterface
}

export type DTSpanIconProps =
  DeviceTableIconInterface & React.HTMLProps<HTMLSpanElement>;