import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Constant } from 'src/app/shared/constant/Constant';
import { CreateNBSService } from 'src/app/shared/services/createNBSService';
declare var jQuery;

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  @ViewChild('scrollOne') scrollOne: ElementRef;
  @ViewChild('scrollTwo') scrollTwo: ElementRef;
  @ViewChild('scrollThree') scrollThree: ElementRef;
  @ViewChild('scrollFour') scrollFour: ElementRef;
  @ViewChild('scrollFive') scrollFive: ElementRef;
  @ViewChild('scrollSix') scrollSix: ElementRef;
  
  public barChartOptions = {
    scaleShowVerticalLines: false,
    // responsive: true,
    scaleShowValues: true,
    scaleValuePaddingX: 10,
    scaleValuePaddingY: 10,
    hover : {
      animationDuration : 0
    },
    animation: {
        onComplete: function () {
            var chartInstance = this.chart,
            ctx = chartInstance.ctx;

            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            ctx.fillStyle = '#000000';
            this.data.datasets.forEach(function (dataset, i) {
                var meta = chartInstance.controller.getDatasetMeta(i);
                meta.data.forEach(function (bar, index) {
                    var data = dataset.data[index];
                    ctx.fillText(data, bar._model.x, bar._model.y - 5);
                });
            });
        }
    }
  };
  // public barChartLabels = ['2000', '2001', '2002', '2003', '2004', '2005', '2006'];
  public barChartType = 'bar';
  public barChartLegend = true;
  // public barChartData = [
  //   {data: [75, 49, 89, 31, 86, 35, 50], label: 'Series A'}
  // ];

  // public graph1: boolean = false;
  // public airBarChartLabels: any = [];
  // public airBarChartData: any = [];

  // public graph2: boolean = false;
  // public rjioBarChartLabels: any = [];
  // public rjioBarChartData: any = [];

  public graph1: boolean = false;
  public barChartLabels: any = [];
  public barChartData: any = [];
  public barChartColors: any = [];

  public spGraph: boolean = false;
  public spBarChartLabels: any = [];
  public spBarChartData: any = [];
  public spBarChartColors: any = [];

  public soGraph: boolean = false;
  public soBarChartLabels: any = [];
  public soBarChartData: any = [];
  public soBarChartColors: any = [];

  public rfiGraph: boolean = false;
  public rfiBarChartLabels: any = [];
  public rfiBarChartData: any = [];
  public rfiBarChartColors: any = [];

  public srAgingGraph: boolean = false;
  public srAgingLabels: any = [];
  public srAgingData: any = [];
  public srAgingColors: any = [];

  public spAgingGraph: boolean = false;
  public spAgingLabels: any = [];
  public spAgingData: any = [];
  public spAgingColors: any = [];

  public soAgingGraph: boolean = false;
  public soAgingLabels: any = [];
  public soAgingData: any = [];
  public soAgingColors: any = [];

  public rfiAgingGraph: boolean = false;
  public rfiAgingLabels: any = [];
  public rfiAgingData: any = [];
  public rfiAgingColors: any = [];

  // allProductType: any = "CreateNBS:Macro Anchor,ODSC_Anchor:ODSC Anchor,New_Tenency:New Tenency,Site_Upgrade:Site Upgrade,I_WAN:I-WAN,HPSC:HPSC Anchor,MCU:MCU,UBR:UBR,Fibre_Termination:Fibre Termination,ODSC_Sharing:ODSC Sharing,HPSC_Sharing:HPSC Sharing,TCL_Redwin:TCL_Redwin,Smart_Split:Smart Split,TCU:TCU,HEX_OLT:HEX OLT";
  allProductType: any = "CreateNBS:Macro Anchor,HPSC:HPSC Anchor,New_Tenency:New Tenency,Site_Upgrade:Site Upgrade";
  productTypeList: any = [];
  allCircle: any = "AP,BH,CG,DL,GJ,HP,HR,JH,JK,KL,KT,MH,MP,OR,PB,RJ,TN,UPE,UPW,WB";
  allOperator: any = "Airtel,BSNL,RJIO,VIL";
  loginEmpId: any = "";
  loginEmpRole: any = "";
  circleName: any = "";
  operator: any = "";
  isHoUser: any = "";
  filterPeriod: any = "";
  srStatus: any = "";
  filterProductType: any = "";
  filterOperator: any = "";
  filterCircleName: any = "";

  filterPeriod1: any = "";
  filterProductType1: any = "";
  filterOperator1: any = "";
  filterCircleName1: any = "";

  constructor(private sharedService : CreateNBSService, private toastr: ToastrService) { 
    this.loginEmpId = localStorage.getItem("empId");
    this.loginEmpRole = localStorage.getItem("empRole")
    this.circleName = localStorage.getItem("circleName");
    this.operator = localStorage.getItem("operator");
    this.isHoUser = localStorage.getItem("isHoUser");

    let productTypeSplit = this.allProductType.split(",");
    let tempProductTypeList = [];
    for(let i=0;i<productTypeSplit.length;i++){
      let json = {
        "paramCode" : productTypeSplit[i].split(":")[0],
        "paramDesc" : productTypeSplit[i].split(":")[1]
      }
      tempProductTypeList.push(json);
    }
    this.productTypeList = tempProductTypeList;
    
  }

  ngOnInit() {
    // this.generateGraph1();
    this.getNoOfList();
    this.getAutoPopUp();
    this.generateGraph123();
    this.generateGraph456();
    this.generateSomGraph();
  }

  allNoOfList = [];
  getNoOfList(){
    this.sharedService.getNoOfList()
    .subscribe((response) =>{
    
      this.allNoOfList = response.wrappedList;
      localStorage.setItem("allNoOfList", JSON.stringify(this.allNoOfList));
    },
    (error)=>{
      this.toastr.warning(Constant.returnServerErrorMessage("getNoOfList"),"Alert !");
    });
  }

  bbuAutoPopUpList = [];
  rfAntennaAutoPopUpList = [];
  rruAutoPopUpList = [];
  mwAutoPopUpList = [];
  getAutoPopUp(){
    this.sharedService.getAutoPopUp()
    .subscribe(
      (result) =>{
        // BBU
        this.bbuAutoPopUpList = result.bbuPopUpList;
        localStorage.setItem("bbuAutoPopUpList", JSON.stringify(this.bbuAutoPopUpList));
        
        // RF Antenna
        this.rfAntennaAutoPopUpList = result.rfAntennaPopUpList;
        localStorage.setItem("rfAntennaAutoPopUpList", JSON.stringify(this.rfAntennaAutoPopUpList));
        
        // RRU
        this.rruAutoPopUpList = result.rruPopUpList;
        localStorage.setItem("rruAutoPopUpList", JSON.stringify(this.rruAutoPopUpList));
        
        // MW
        this.mwAutoPopUpList = result.mwPopUpList;
        localStorage.setItem("mwAutoPopUpList", JSON.stringify(this.mwAutoPopUpList));
        
      },
      (error) =>{

      }
    )
  }

  generateGraph123(){
    this.generateGraph1();
    this.generateGraph2();
    this.generateGraph3();
    this.generateRfiGraph();
  }

  // generateGraph1(){
  //   let jsonData = {
  //     loginEmpId: this.loginEmpId,
  //     loginEmpRole: this.loginEmpRole,
  //     circleName: this.circleName,
  //     operator: this.operator,
  //     isHoUser: this.isHoUser,
  //     filterPeriod: this.filterPeriod,
  //     srStatus: this.srStatus,
  //     filterProductType: this.filterProductType,
  //     filterCircleName: this.filterCircleName,
  //     graphType: 1
  //   }
  //   this.sharedService.generateGraph(jsonData)
  //   .subscribe(
  //     (response)=>{
  //       this.airBarChartLabels = response.labelArr;
  //       // console.log(this.airBarChartLabels);
  //       this.airBarChartData = response.dataArr;
  //       // console.log(this.airBarChartData);
  //       this.graph1 = true;

  //       this.rjioBarChartLabels = response.rjioLabelArr;
  //       this.rjioBarChartData = response.rjioDataArr;

  //       this.graph2 = true;
  //     },
  //     (error)=>{
        
  //     }
  //   )
  // }

  generateGraph1(){
    this.graph1 = false;
    this.barChartLabels = [];
    this.barChartData = [];
    this.barChartColors = [];

    let jsonData = {
      loginEmpId: this.loginEmpId,
      loginEmpRole: this.loginEmpRole,
      circleName: this.circleName,
      operator: this.operator,
      isHoUser: this.isHoUser,
      filterPeriod: this.filterPeriod,
      // srStatus: this.srStatus,
      filterProductType: this.filterProductType,
      filterOperator: this.filterOperator,
      filterCircleName: this.filterCircleName,
      graphType: 1
    }
    this.sharedService.generateGraph(jsonData)
    .subscribe(
      (response)=>{
        this.graph1 = true;
        this.barChartLabels = response.labelArr;
        this.barChartData = response.dataArr;
        this.barChartColors = response.bgColorArr
      },
      (error)=>{
        
      }
    )
  }

  generateGraph2(){
    this.spGraph = false;
    this.spBarChartLabels = [];
    this.spBarChartData = [];
    this.spBarChartColors = [];

    let jsonData = {
      loginEmpId: this.loginEmpId,
      loginEmpRole: this.loginEmpRole,
      circleName: this.circleName,
      operator: this.operator,
      isHoUser: this.isHoUser,
      filterPeriod: this.filterPeriod,
      // srStatus: this.srStatus,
      filterProductType: this.filterProductType,
      filterOperator: this.filterOperator,
      filterCircleName: this.filterCircleName,
      graphType: 2
    }
    this.sharedService.generateGraph(jsonData)
    .subscribe(
      (response)=>{
        this.spGraph = true;
        this.spBarChartLabels = response.labelArr;
        this.spBarChartData = response.dataArr;
        this.spBarChartColors = response.bgColorArr;
      },
      (error)=>{
        
      }
    )
  }

  generateGraph3(){
    this.soGraph = false;
    this.soBarChartLabels = [];
    this.soBarChartData = [];
    this.soBarChartColors = [];

    let jsonData = {
      loginEmpId: this.loginEmpId,
      loginEmpRole: this.loginEmpRole,
      circleName: this.circleName,
      operator: this.operator,
      isHoUser: this.isHoUser,
      filterPeriod: this.filterPeriod,
      // srStatus: this.srStatus,
      filterProductType: this.filterProductType,
      filterOperator: this.filterOperator,
      filterCircleName: this.filterCircleName,
      graphType: 3
    }
    this.sharedService.generateGraph(jsonData)
    .subscribe(
      (response)=>{
        this.soGraph = true;
        this.soBarChartLabels = response.labelArr;
        this.soBarChartData = response.dataArr;
        this.soBarChartColors = response.bgColorArr;
      },
      (error)=>{
        
      }
    )
  }

  generateRfiGraph(){
    this.rfiGraph = false;
    this.rfiBarChartLabels = [];
    this.rfiBarChartData = [];
    this.rfiBarChartColors = [];

    let jsonData = {
      loginEmpId: this.loginEmpId,
      loginEmpRole: this.loginEmpRole,
      circleName: this.circleName,
      operator: this.operator,
      isHoUser: this.isHoUser,
      filterPeriod: this.filterPeriod,
      // srStatus: this.srStatus,
      filterProductType: this.filterProductType,
      filterOperator: this.filterOperator,
      filterCircleName: this.filterCircleName,
      graphType: "RFI"
    }
    this.sharedService.generateGraph(jsonData)
    .subscribe(
      (response)=>{
        this.rfiGraph = true;
        this.rfiBarChartLabels = response.labelArr;
        this.rfiBarChartData = response.dataArr;
        this.rfiBarChartColors = response.bgColorArr;
      },
      (error)=>{
        
      }
    )
  }

  generateGraph456(){
    this.generateGraph4();
    this.generateGraph5();
    this.generateGraph6();
    this.generateRfiAging();
  }

  generateGraph4(){
    this.srAgingGraph = false;
    this.srAgingLabels = [];
    this.srAgingData = [];
    this.srAgingColors = [];

    let jsonData = {
      loginEmpId: this.loginEmpId,
      loginEmpRole: this.loginEmpRole,
      circleName: this.circleName,
      operator: this.operator,
      isHoUser: this.isHoUser,
      filterPeriod: this.filterPeriod1,
      // srStatus: this.srStatus,
      filterProductType: this.filterProductType1,
      filterOperator: this.filterOperator1,
      filterCircleName: this.filterCircleName1,
      graphType: 4
    }
    this.sharedService.generateGraph(jsonData)
    .subscribe(
      (response)=>{
        this.srAgingGraph = true;
        this.srAgingLabels = response.labelArr;
        this.srAgingData = response.dataArr;
        this.srAgingColors = response.bgColorArr
      },
      (error)=>{
        
      }
    )
  }

  generateGraph5(){
    this.spAgingGraph = false;
    this.spAgingLabels = [];
    this.spAgingData = [];
    this.spAgingColors = [];

    let jsonData = {
      loginEmpId: this.loginEmpId,
      loginEmpRole: this.loginEmpRole,
      circleName: this.circleName,
      operator: this.operator,
      isHoUser: this.isHoUser,
      filterPeriod: this.filterPeriod1,
      // srStatus: this.srStatus,
      filterProductType: this.filterProductType1,
      filterOperator: this.filterOperator1,
      filterCircleName: this.filterCircleName1,
      graphType: 5
    }
    this.sharedService.generateGraph(jsonData)
    .subscribe(
      (response)=>{
        this.spAgingGraph = true;
        this.spAgingLabels = response.labelArr;
        this.spAgingData = response.dataArr;
        this.spAgingColors = response.bgColorArr;
      },
      (error)=>{
        
      }
    )
  }

  generateGraph6(){
    this.soAgingGraph = false;
    this.soAgingLabels = [];
    this.soAgingData = [];
    this.soAgingColors = [];

    let jsonData = {
      loginEmpId: this.loginEmpId,
      loginEmpRole: this.loginEmpRole,
      circleName: this.circleName,
      operator: this.operator,
      isHoUser: this.isHoUser,
      filterPeriod: this.filterPeriod1,
      // srStatus: this.srStatus,
      filterProductType: this.filterProductType1,
      filterOperator: this.filterOperator1,
      filterCircleName: this.filterCircleName1,
      graphType: 6
    }
    this.sharedService.generateGraph(jsonData)
    .subscribe(
      (response)=>{
        this.soAgingGraph = true;
        this.soAgingLabels = response.labelArr;
        this.soAgingData = response.dataArr;
        this.soAgingColors = response.bgColorArr;
      },
      (error)=>{
        
      }
    )
  }

  generateRfiAging(){
    this.rfiAgingGraph = false;
    this.rfiAgingLabels = [];
    this.rfiAgingData = [];
    this.rfiAgingColors = [];

    let jsonData = {
      loginEmpId: this.loginEmpId,
      loginEmpRole: this.loginEmpRole,
      circleName: this.circleName,
      operator: this.operator,
      isHoUser: this.isHoUser,
      filterPeriod: this.filterPeriod1,
      // srStatus: this.srStatus,
      filterProductType: this.filterProductType1,
      filterOperator: this.filterOperator1,
      filterCircleName: this.filterCircleName1,
      graphType: "RFI_Aging"
    }
    this.sharedService.generateGraph(jsonData)
    .subscribe(
      (response)=>{
        this.rfiAgingGraph = true;
        this.rfiAgingLabels = response.labelArr;
        this.rfiAgingData = response.dataArr;
        this.rfiAgingColors = response.bgColorArr;
      },
      (error)=>{
        
      }
    )
  }

  public filterPeriod2: any = "";
  public pieChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      position: 'right',
    },
    scaleShowValues: true
  };
  public pieChartType = 'pie';
  public pieChartLegend = true;

  


  generateSomGraph(){
    this.generateSoSomGraph();
    this.generateRfiSomGraph();
  }

  public soSomGraph: boolean = false;
  public soSomPieChartLabels = ['A','B','C'];
  public soSomPieChartData = [300, 500, 100];
  public soSomPieChartColors : any[] = [
    {backgroundColor : [], borderColor : []}
  ];
  public soSomValueArr = [];

  generateSoSomGraph(){
    this.soSomGraph = false;

    let jsonData = {
      loginEmpId: this.loginEmpId,
      loginEmpRole: this.loginEmpRole,
      circleName: this.circleName,
      operator: this.operator,
      isHoUser: this.isHoUser,
      filterPeriod: this.filterPeriod2,
      // srStatus: this.srStatus,
      filterProductType: "",
      filterOperator: "",
      filterCircleName: "",
      graphType: "soSom"
    }
    this.sharedService.generateGraph(jsonData)
    .subscribe(
      (response)=>{
        this.soSomGraph = true;
        this.soSomPieChartLabels = response.labelArr;
        this.soSomPieChartData = response.dataArr;
        this.soSomPieChartColors = response.bgColorArr;
        this.soSomValueArr = response.valueArr;
      },
      (error)=>{
        
      }
    )
  }

  public rfiSomGraph: boolean = false;
  public rfiSomPieChartLabels = ['D','E','F'];
  public rfiSomPieChartData = [400, 600, 1000];
  public rfiSomPieChartColors : any[] = [
    {backgroundColor : [], borderColor : []}
  ];
  public rfiSomValueArr = [];
  generateRfiSomGraph(){
    this.rfiSomGraph = false;

    let jsonData = {
      loginEmpId: this.loginEmpId,
      loginEmpRole: this.loginEmpRole,
      circleName: this.circleName,
      operator: this.operator,
      isHoUser: this.isHoUser,
      filterPeriod: this.filterPeriod2,
      // srStatus: this.srStatus,
      filterProductType: "",
      filterOperator: "",
      filterCircleName: "",
      graphType: "rfiSom"
    }
    this.sharedService.generateGraph(jsonData)
    .subscribe(
      (response)=>{
        this.rfiSomGraph = true;
        this.rfiSomPieChartLabels = response.labelArr;
        this.rfiSomPieChartData = response.dataArr;
        this.rfiSomPieChartColors = response.bgColorArr;
        this.rfiSomValueArr = response.valueArr;
      },
      (error)=>{
        
      }
    )
  }

  public modalGraph: any = false;
  public modalGraphType: any = "";
  public modalBarChartLabels: any = [];
  public modalBarChartData: any = [];
  public modalBarChartColors: any = [];
  bigGraph(modalName:any, graphId: any, graphType: any){
    this.modalGraph = false;
    this.modalGraphType = "";
    this.modalBarChartLabels = [];
    this.modalBarChartData = [];
    this.modalBarChartColors = [];

    jQuery("#"+modalName).modal({
      backdrop : 'static',
      keyboard : false
    });
    
    setTimeout(() => {
      this.modalGraph = true;
      this.modalGraphType = graphType;
      if(graphId == "graph1"){
        this.modalBarChartLabels = this.barChartLabels;
        this.modalBarChartData = this.barChartData;
        this.modalBarChartColors = this.barChartColors;
      }
      else if(graphId == "spGraph"){
        this.modalBarChartLabels = this.spBarChartLabels;
        this.modalBarChartData = this.spBarChartData;
        this.modalBarChartColors = this.spBarChartColors;
      }
      else if(graphId == "soGraph"){
        this.modalBarChartLabels = this.soBarChartLabels;
        this.modalBarChartData = this.soBarChartData;
        this.modalBarChartColors = this.soBarChartColors;
      }
      else if(graphId == "srAgingGraph"){
        this.modalBarChartLabels = this.srAgingLabels;
        this.modalBarChartData = this.srAgingData;
        this.modalBarChartColors = this.srAgingColors;
      }
      else if(graphId == "spAgingGraph"){
        this.modalBarChartLabels = this.spAgingLabels;
        this.modalBarChartData = this.spAgingData;
        this.modalBarChartColors = this.spAgingColors;
      }
      else if(graphId == "soAgingGraph"){
        this.modalBarChartLabels = this.soAgingLabels;
        this.modalBarChartData = this.soAgingData;
        this.modalBarChartColors = this.soAgingColors;
      }
    }, 100);
  }

  updateScroll(scrollNo:any){
    const scrollOne = this.scrollOne.nativeElement as HTMLElement;
    const scrollTwo = this.scrollTwo.nativeElement as HTMLElement;
    const scrollThree = this.scrollThree.nativeElement as HTMLElement;
    const scrollFour = this.scrollFour.nativeElement as HTMLElement;
    const scrollFive = this.scrollFive.nativeElement as HTMLElement;
    const scrollSix = this.scrollSix.nativeElement as HTMLElement;

    // do logic and set
    if(scrollNo == 1){
      scrollTwo.scrollLeft = scrollOne.scrollLeft;
      scrollThree.scrollLeft = scrollOne.scrollLeft;
    }
    else if(scrollNo == 2){
      scrollOne.scrollLeft = scrollTwo.scrollLeft;
      scrollThree.scrollLeft = scrollTwo.scrollLeft;
    }
    else if(scrollNo == 3){
      scrollOne.scrollLeft = scrollThree.scrollLeft;
      scrollTwo.scrollLeft = scrollThree.scrollLeft;
    }
    else if(scrollNo == 4){
      scrollFive.scrollLeft = scrollFour.scrollLeft;
      scrollSix.scrollLeft = scrollFour.scrollLeft;
    }
    else if(scrollNo == 5){
      scrollFour.scrollLeft = scrollFive.scrollLeft;
      scrollSix.scrollLeft = scrollFive.scrollLeft;
    }
    else if(scrollNo == 6){
      scrollFour.scrollLeft = scrollSix.scrollLeft;
      scrollFive.scrollLeft = scrollSix.scrollLeft;
    }
    
  }

  public countGraph: boolean = true;
  public agingGraph: boolean = false;
  public somGraph: boolean = false;
  showGraph(type:any){
    if(type == 1){
      this.agingGraph = false;
      this.countGraph = true;
      
    }
    else if(type == 2){
      this.countGraph = false;
      this.agingGraph = true;
    }
  }

  openAnyModal(modalName : any){
    jQuery("#"+modalName).modal({
      backdrop : 'static',
      keyboard : false
    });
  }

  closeAnyModal(modalName: any){
    jQuery("#"+modalName).modal("hide");
  }
}


