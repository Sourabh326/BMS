import React from 'react'
import Navbar from '../../Navbar/Navbar'


const Calculator = () => {

const onInput = (event) =>{
 //  One Brick Rate 
   var oneFlyAshRate = 0.70;
   var oneLimeRate = 3.25;
   var oneGypsumRate = 4;
   var oneSandRate = 0.40;
   var oneElectricityRate = 0.04;
   var oneMachineRate = 0.01;
   var oneWaterRate = 0.01;
   var 
//    One Brick Quantity
   var oneFlyAsh = 1.08195;
   var oneLime = 0.25;
   var oneGypsum = 0.05;
   var oneSand = 1.875;
   var oneElectricity = 1
   var oneMachine = 1
   var oneWater = 1

   var total =(event.target.value)
   var totalFlyash = document.getElementById('total').value=(total*oneFlyAsh)
   var totalLime = document.getElementById('totalLime').value=(total*oneLime)
   var totalGypsum = document.getElementById('totalGypsum').value=(total*oneGypsum)
   var totalSand = document.getElementById('totalSand').value=(total*oneSand)
   var totalElectricity = document.getElementById('totalElectricity').value=(total*oneElectricity)
   var totalMachine = document.getElementById('totalMachine').value=(total*oneMachine)
   var totalWater = document.getElementById('totalWater').value=(total*oneWater)

   
   var totalFlyAshRate =totalFlyash*oneFlyAshRate;
   var totalLimeRate = totalLime*oneLimeRate
   var totalGypsumRate =totalGypsum*oneGypsumRate
   var totalSandRate =totalSand*oneSandRate;
   var totalElectricityRate = totalElectricity*oneElectricityRate;
   var totalMachineRate = totalMachine*oneMachineRate;
   var totalWaterRate = totalWater*oneWaterRate;
   document.getElementById('totalAmount').innerHTML=totalLimeRate+ totalFlyAshRate +totalGypsumRate + totalSandRate+totalElectricityRate+
   totalMachineRate+totalWaterRate;
// document.getElementById('totalAmount').innerHTML=totalFlyAshRate
}       

    return (
       <>
       <Navbar />
       <div className="main-footer">
           
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Calculator
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Production Calculator</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div className="row">
            <div className="col-md-4">
                <div className="form-group">
                    <label >Quantity of Bricks</label>
                    <input type="text" onChange={onInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Fly Ash</label>
                    <input type="text" value="" id="total" name="" placeholder="" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Lime</label>
                    <input type="text" value="" name="" id="totalLime" />
                </div>
                
            </div>
            <div className="col-md-4">
                
                <div className="form-group">
                    <label htmlFor="">Electricity</label>
                    <input type="text" value="" name="" id="totalElectricity" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Machine Mentence</label>
                    <input type="text" value="" name="" id="totalMachine" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Water</label>
                    <input type="text" value="" name="" id="totalWater" />
                </div>
            </div>
            <div className="col-md-4">
            <div className="form-group">
                    <label htmlFor="">Gypsum</label>
                    <input type="text" value="" name="" id="totalGypsum" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Sand</label>
                    <input type="text" value="" name="" id="totalSand" />
                </div>
            </div>
        </div>
      </div><hr/>
     <div className="">
         <button className="btn btn-dark btn-block p-3">Total = <span className="h3" id="totalAmount" >0</span></button>
     </div>
    </div>
  </div>
</div>
       </div>
       </>
    )
}

export default Calculator
