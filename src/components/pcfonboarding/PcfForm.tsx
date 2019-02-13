import * as React from 'react';
import './PcfForm.css';

export class PcfForm extends React.Component<PcfFormProps, PcfFormState> {
    state: PcfFormState = {
        title: '',
        selectedReq: '',
        selectedOption: '',
        employeeId: '',
        employeeName: '',
        businessJustification: '',
        hcmSupervisorId: '',
        vertical: '',
        space: '',
        spacename: ''
    };
    constructor(parameters: PcfFormProps) {
        super(parameters);
        this.handleRequirementChange = this.handleRequirementChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);

    }
    handleRequirementChange(e: React.FormEvent<HTMLInputElement>) { 
        this.setState({
            selectedReq: e.currentTarget.value
        });
    }
    handleTextChange(e: React.FormEvent<HTMLInputElement>) { 
        this.setState({
            employeeId: e.currentTarget.value
        });
    }
    render() {
        return (
        <div>
            <div className="divpadding">
              <div className="labelTitle">Select your requirement type</div>
              <div>                  
                  <input type="radio" name="Req" value={this.state.selectedReq} onChange={this.handleRequirementChange} />PCF Org/Spcae /User Allocation
                  <input type="radio" name="Req" value={this.state.selectedReq} onChange={this.handleRequirementChange} />Product Onboarding                  
              </div>
            </div> 
            <div>
            <div className="addEventTitle">Employee ID</div>
                <div><input type="text" className="eventInput form-control" onChange={this.handleTextChange} /></div><br />
            </div>
        </div>    
        );
    }
}
 
export interface PcfFormState {
    title: string;
    employeeId: string;
    employeeName: string;
    businessJustification: string;
    hcmSupervisorId: string;
    vertical: string;
    space: string;
    spacename: string;
    selectedReq: string;
    selectedOption: string;
}

export interface PcfFormProps {
    title: string;  
}
