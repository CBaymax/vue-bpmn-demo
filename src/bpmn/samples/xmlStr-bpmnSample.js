const sample_1 =
    `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bioc="http://bpmn.io/schema/bpmn/biocolor/1.0" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="1.11.3">
  <bpmn:process id="Process_1" isExecutable="true">
    <bpmn:subProcess id="SubProcess_0gc6evc" name="Cash Withdrawal">
      <bpmn:incoming>SequenceFlow_0t9dyy4</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1ge46mh</bpmn:outgoing>
      <bpmn:task id="Task_1upmjgh" name="Prepare Cash">
        <bpmn:incoming>SequenceFlow_10d6h3a</bpmn:incoming>
        <bpmn:outgoing>SequenceFlow_1dzm18n</bpmn:outgoing>
      </bpmn:task>
      <bpmn:parallelGateway id="ParallelGateway_0s75uad">
        <bpmn:incoming>SequenceFlow_1bpznq3</bpmn:incoming>
        <bpmn:outgoing>SequenceFlow_10d6h3a</bpmn:outgoing>
        <bpmn:outgoing>SequenceFlow_0rz4mzx</bpmn:outgoing>
      </bpmn:parallelGateway>
      <bpmn:task id="Task_128fg2b" name="Charge Account">
        <bpmn:incoming>SequenceFlow_0rz4mzx</bpmn:incoming>
        <bpmn:outgoing>SequenceFlow_1pol4sw</bpmn:outgoing>
      </bpmn:task>
      <bpmn:task id="Task_16oagb5" name="Issue Money">
        <bpmn:incoming>SequenceFlow_0cx35wm</bpmn:incoming>
        <bpmn:outgoing>SequenceFlow_05m0kip</bpmn:outgoing>
      </bpmn:task>
      <bpmn:parallelGateway id="ParallelGateway_158jo5x">
        <bpmn:incoming>SequenceFlow_1dzm18n</bpmn:incoming>
        <bpmn:incoming>SequenceFlow_1pol4sw</bpmn:incoming>
        <bpmn:outgoing>SequenceFlow_0cx35wm</bpmn:outgoing>
      </bpmn:parallelGateway>
      <bpmn:sequenceFlow id="SequenceFlow_10d6h3a" sourceRef="ParallelGateway_0s75uad" targetRef="Task_1upmjgh" />
      <bpmn:sequenceFlow id="SequenceFlow_1dzm18n" sourceRef="Task_1upmjgh" targetRef="ParallelGateway_158jo5x" />
      <bpmn:sequenceFlow id="SequenceFlow_0rz4mzx" sourceRef="ParallelGateway_0s75uad" targetRef="Task_128fg2b" />
      <bpmn:sequenceFlow id="SequenceFlow_1pol4sw" sourceRef="Task_128fg2b" targetRef="ParallelGateway_158jo5x" />
      <bpmn:sequenceFlow id="SequenceFlow_0cx35wm" sourceRef="ParallelGateway_158jo5x" targetRef="Task_16oagb5" />
      <bpmn:startEvent id="StartEvent_0j9yk1o" name="Cash Amount Selected">
        <bpmn:outgoing>SequenceFlow_1bpznq3</bpmn:outgoing>
      </bpmn:startEvent>
      <bpmn:sequenceFlow id="SequenceFlow_1bpznq3" sourceRef="StartEvent_0j9yk1o" targetRef="ParallelGateway_0s75uad" />
      <bpmn:endEvent id="EndEvent_1e8gne7" name="Cash Issued">
        <bpmn:incoming>SequenceFlow_05m0kip</bpmn:incoming>
      </bpmn:endEvent>
      <bpmn:sequenceFlow id="SequenceFlow_05m0kip" sourceRef="Task_16oagb5" targetRef="EndEvent_1e8gne7" />
    </bpmn:subProcess>
    <bpmn:sequenceFlow id="SequenceFlow_0t9dyy4" sourceRef="Task_0p47z7h" targetRef="SubProcess_0gc6evc" />
    <bpmn:startEvent id="StartEvent_0offpno" name="ATM Transaction Needed">
      <bpmn:outgoing>SequenceFlow_1xib75z</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="SequenceFlow_1xib75z" sourceRef="StartEvent_0offpno" targetRef="Task_026c0id" />
    <bpmn:sequenceFlow id="SequenceFlow_1ge46mh" sourceRef="SubProcess_0gc6evc" targetRef="IntermediateThrowEvent_02yoqsl" />
    <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_02yoqsl" name="Cash Withdrawn">
      <bpmn:incoming>SequenceFlow_1ge46mh</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1yu5yeq</bpmn:outgoing>
      <bpmn:conditionalEventDefinition />
    </bpmn:intermediateCatchEvent>
    <bpmn:task id="Task_1xu25p5" name="Check For Further Interactions">
      <bpmn:incoming>SequenceFlow_1yu5yeq</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_0zjbpms</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_0zxk9aa</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1udgk24</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_1yu5yeq" sourceRef="IntermediateThrowEvent_02yoqsl" targetRef="Task_1xu25p5" />
    <bpmn:sequenceFlow id="SequenceFlow_1udgk24" sourceRef="Task_1xu25p5" targetRef="ExclusiveGateway_12ylcgi" />
    <bpmn:eventBasedGateway id="ExclusiveGateway_12ylcgi">
      <bpmn:incoming>SequenceFlow_1udgk24</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0ftjyrx</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_1vsv7r8</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_0jd8d0i</bpmn:outgoing>
    </bpmn:eventBasedGateway>
    <bpmn:intermediateCatchEvent id="IntermediateCatchEvent_09tc0wh" name="New Interaction Requested">
      <bpmn:incoming>SequenceFlow_0ftjyrx</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0rkllvh</bpmn:outgoing>
      <bpmn:messageEventDefinition />
    </bpmn:intermediateCatchEvent>
    <bpmn:sequenceFlow id="SequenceFlow_0ftjyrx" sourceRef="ExclusiveGateway_12ylcgi" targetRef="IntermediateCatchEvent_09tc0wh" />
    <bpmn:intermediateCatchEvent id="IntermediateCatchEvent_087fl8m" name="No Further Interaction Requested">
      <bpmn:incoming>SequenceFlow_1vsv7r8</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0zdc0ci</bpmn:outgoing>
      <bpmn:messageEventDefinition />
    </bpmn:intermediateCatchEvent>
    <bpmn:sequenceFlow id="SequenceFlow_1vsv7r8" sourceRef="ExclusiveGateway_12ylcgi" targetRef="IntermediateCatchEvent_087fl8m" />
    <bpmn:intermediateCatchEvent id="IntermediateCatchEvent_12qf66u" name="30 seconds elapsed">
      <bpmn:incoming>SequenceFlow_0jd8d0i</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_10by6md</bpmn:outgoing>
      <bpmn:timerEventDefinition />
    </bpmn:intermediateCatchEvent>
    <bpmn:sequenceFlow id="SequenceFlow_0jd8d0i" sourceRef="ExclusiveGateway_12ylcgi" targetRef="IntermediateCatchEvent_12qf66u" />
    <bpmn:task id="Task_0e0mu6c" name="Return Card">
      <bpmn:incoming>SequenceFlow_0zdc0ci</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_10by6md</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1p7rbgq</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_0zdc0ci" sourceRef="IntermediateCatchEvent_087fl8m" targetRef="Task_0e0mu6c" />
    <bpmn:sequenceFlow id="SequenceFlow_10by6md" sourceRef="IntermediateCatchEvent_12qf66u" targetRef="Task_0e0mu6c" />
    <bpmn:endEvent id="EndEvent_0swhjpo" name="ATM Transaction Finsihed">
      <bpmn:incoming>SequenceFlow_1p7rbgq</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_0lmdz0d</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="SequenceFlow_1p7rbgq" sourceRef="Task_0e0mu6c" targetRef="EndEvent_0swhjpo" />
    <bpmn:sequenceFlow id="SequenceFlow_0rkllvh" sourceRef="IntermediateCatchEvent_09tc0wh" targetRef="Task_0po6mda" />
    <bpmn:sequenceFlow id="SequenceFlow_130hgg8" sourceRef="Task_026c0id" targetRef="Task_0po6mda" />
    <bpmn:userTask id="Task_026c0id" name="Insert Card">
      <bpmn:incoming>SequenceFlow_1xib75z</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_130hgg8</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:userTask id="Task_0p47z7h" name="Select Amount">
      <bpmn:incoming>SequenceFlow_1qdqk69</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0t9dyy4</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:exclusiveGateway id="ExclusiveGateway_13kuced" name="Selected Interaction?">
      <bpmn:incoming>SequenceFlow_1364l2a</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1qdqk69</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_091wldx</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="SequenceFlow_1qdqk69" name="Cash Withdrawal" sourceRef="ExclusiveGateway_13kuced" targetRef="Task_0p47z7h" />
    <bpmn:sequenceFlow id="SequenceFlow_091wldx" name="Account Balance" sourceRef="ExclusiveGateway_13kuced" targetRef="Task_1ept7kl" />
    <bpmn:subProcess id="Task_1ept7kl" name="Account Balance Information">
      <bpmn:incoming>SequenceFlow_091wldx</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0zjbpms</bpmn:outgoing>
      <bpmn:startEvent id="StartEvent_13lmuqn" name="Account Balance Requested">
        <bpmn:outgoing>SequenceFlow_17nxcr4</bpmn:outgoing>
      </bpmn:startEvent>
      <bpmn:task id="Task_180wh31" name="Display Balance">
        <bpmn:incoming>SequenceFlow_17nxcr4</bpmn:incoming>
        <bpmn:outgoing>SequenceFlow_10zdsna</bpmn:outgoing>
      </bpmn:task>
      <bpmn:sequenceFlow id="SequenceFlow_17nxcr4" sourceRef="StartEvent_13lmuqn" targetRef="Task_180wh31" />
      <bpmn:sequenceFlow id="SequenceFlow_10zdsna" sourceRef="Task_180wh31" targetRef="IntermediateThrowEvent_10vhtou" />
      <bpmn:intermediateCatchEvent id="IntermediateThrowEvent_10vhtou" name="Balance checked">
        <bpmn:incoming>SequenceFlow_10zdsna</bpmn:incoming>
        <bpmn:outgoing>SequenceFlow_0z16g3i</bpmn:outgoing>
        <bpmn:conditionalEventDefinition />
      </bpmn:intermediateCatchEvent>
      <bpmn:endEvent id="EndEvent_1qnlj46" name="Account Balance displayed">
        <bpmn:incoming>SequenceFlow_0z16g3i</bpmn:incoming>
      </bpmn:endEvent>
      <bpmn:sequenceFlow id="SequenceFlow_0z16g3i" sourceRef="IntermediateThrowEvent_10vhtou" targetRef="EndEvent_1qnlj46" />
    </bpmn:subProcess>
    <bpmn:sequenceFlow id="SequenceFlow_0zjbpms" sourceRef="Task_1ept7kl" targetRef="Task_1xu25p5" />
    <bpmn:sequenceFlow id="SequenceFlow_1364l2a" sourceRef="Task_0po6mda" targetRef="ExclusiveGateway_13kuced" />
    <bpmn:userTask id="Task_0po6mda" name="Select Interaction">
      <bpmn:incoming>SequenceFlow_130hgg8</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_0rkllvh</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1364l2a</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:boundaryEvent id="BoundaryEvent_07intkn" name="Message received" attachedToRef="Task_1ept7kl">
      <bpmn:outgoing>SequenceFlow_0lmdz0d</bpmn:outgoing>
      <bpmn:messageEventDefinition messageRef="Message_1dyo6g5" />
    </bpmn:boundaryEvent>
    <bpmn:sequenceFlow id="SequenceFlow_0lmdz0d" sourceRef="BoundaryEvent_07intkn" targetRef="EndEvent_0swhjpo" />
    <bpmn:sequenceFlow id="SequenceFlow_0zxk9aa" sourceRef="BoundaryEvent_Error" targetRef="Task_1xu25p5" />
    <bpmn:boundaryEvent id="BoundaryEvent_Error" name="Error" attachedToRef="SubProcess_0gc6evc">
      <bpmn:outgoing>SequenceFlow_0zxk9aa</bpmn:outgoing>
      <bpmn:errorEventDefinition errorRef="Error_0k93fd1" />
    </bpmn:boundaryEvent>
    <bpmn:boundaryEvent id="BoundaryEvent_Timer_non_interrupting" cancelActivity="false" attachedToRef="SubProcess_0gc6evc">
      <bpmn:outgoing>SequenceFlow_0rgmhwk</bpmn:outgoing>
      <bpmn:timerEventDefinition />
    </bpmn:boundaryEvent>
    <bpmn:endEvent id="EndEvent_1p2txse">
      <bpmn:incoming>SequenceFlow_0j9ajgx</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="SequenceFlow_0rgmhwk" sourceRef="BoundaryEvent_Timer_non_interrupting" targetRef="Task_1u7pqoy" />
    <bpmn:task id="Task_1u7pqoy" name="Timeout">
      <bpmn:incoming>SequenceFlow_0rgmhwk</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0j9ajgx</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_0j9ajgx" sourceRef="Task_1u7pqoy" targetRef="EndEvent_1p2txse" />
  </bpmn:process>
  <bpmn:message id="Message_1dyo6g5" name="Message_message" />
  <bpmn:error id="Error_0k93fd1" name="Error_1405ero" />
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="SubProcess_0gc6evc_di" bpmnElement="SubProcess_0gc6evc" isExpanded="true">
        <dc:Bounds x="627" y="0" width="593" height="342" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1upmjgh_di" bpmnElement="Task_1upmjgh">
        <dc:Bounds x="797" y="42" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ParallelGateway_0s75uad_di" bpmnElement="ParallelGateway_0s75uad">
        <dc:Bounds x="732" y="196" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="712" y="249" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_128fg2b_di" bpmnElement="Task_128fg2b">
        <dc:Bounds x="797" y="241" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_16oagb5_di" bpmnElement="Task_16oagb5">
        <dc:Bounds x="1015" y="181" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ParallelGateway_158jo5x_di" bpmnElement="ParallelGateway_158jo5x">
        <dc:Bounds x="913" y="196" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="893" y="249" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_10d6h3a_di" bpmnElement="SequenceFlow_10d6h3a">
        <di:waypoint xsi:type="dc:Point" x="757" y="196" />
        <di:waypoint xsi:type="dc:Point" x="757" y="82" />
        <di:waypoint xsi:type="dc:Point" x="797" y="82" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="772" y="132.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_1dzm18n_di" bpmnElement="SequenceFlow_1dzm18n">
        <di:waypoint xsi:type="dc:Point" x="897" y="82" />
        <di:waypoint xsi:type="dc:Point" x="938" y="82" />
        <di:waypoint xsi:type="dc:Point" x="938" y="196" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="917.5" y="60.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0rz4mzx_di" bpmnElement="SequenceFlow_0rz4mzx">
        <di:waypoint xsi:type="dc:Point" x="757" y="246" />
        <di:waypoint xsi:type="dc:Point" x="757" y="281" />
        <di:waypoint xsi:type="dc:Point" x="797" y="281" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="772" y="257" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_1pol4sw_di" bpmnElement="SequenceFlow_1pol4sw">
        <di:waypoint xsi:type="dc:Point" x="897" y="281" />
        <di:waypoint xsi:type="dc:Point" x="938" y="281" />
        <di:waypoint xsi:type="dc:Point" x="938" y="246" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="917.5" y="259.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0cx35wm_di" bpmnElement="SequenceFlow_0cx35wm">
        <di:waypoint xsi:type="dc:Point" x="963" y="221" />
        <di:waypoint xsi:type="dc:Point" x="1015" y="221" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="944" y="200" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="StartEvent_0j9yk1o_di" bpmnElement="StartEvent_0j9yk1o">
        <dc:Bounds x="666.8728717366629" y="203" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="652" y="242" width="67" height="24" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1bpznq3_di" bpmnElement="SequenceFlow_1bpznq3">
        <di:waypoint xsi:type="dc:Point" x="703" y="221" />
        <di:waypoint xsi:type="dc:Point" x="732" y="221" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="717.5" y="199.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="EndEvent_1e8gne7_di" bpmnElement="EndEvent_1e8gne7">
        <dc:Bounds x="1148.872871736663" y="203" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1136" y="242" width="62" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_05m0kip_di" bpmnElement="SequenceFlow_05m0kip">
        <di:waypoint xsi:type="dc:Point" x="1115" y="221" />
        <di:waypoint xsi:type="dc:Point" x="1149" y="221" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1132" y="199.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0t9dyy4_di" bpmnElement="SequenceFlow_0t9dyy4">
        <di:waypoint xsi:type="dc:Point" x="590" y="171" />
        <di:waypoint xsi:type="dc:Point" x="627" y="171" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="608.5" y="149.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="StartEvent_0offpno_di" bpmnElement="StartEvent_0offpno">
        <dc:Bounds x="-7" y="153" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="-30" y="192" width="83" height="24" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1xib75z_di" bpmnElement="SequenceFlow_1xib75z">
        <di:waypoint xsi:type="dc:Point" x="29" y="171" />
        <di:waypoint xsi:type="dc:Point" x="63" y="171" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="46" y="149.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_1ge46mh_di" bpmnElement="SequenceFlow_1ge46mh">
        <di:waypoint xsi:type="dc:Point" x="1220" y="171" />
        <di:waypoint xsi:type="dc:Point" x="1259" y="171" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1239.5" y="149.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="IntermediateCatchEvent_04d3x2w_di" bpmnElement="IntermediateThrowEvent_02yoqsl">
        <dc:Bounds x="1259" y="153" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1236" y="192" width="81" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1xu25p5_di" bpmnElement="Task_1xu25p5">
        <dc:Bounds x="1327.1135265700484" y="131" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1yu5yeq_di" bpmnElement="SequenceFlow_1yu5yeq">
        <di:waypoint xsi:type="dc:Point" x="1295" y="171" />
        <di:waypoint xsi:type="dc:Point" x="1327" y="171" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1311" y="149.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_1udgk24_di" bpmnElement="SequenceFlow_1udgk24">
        <di:waypoint xsi:type="dc:Point" x="1427" y="171" />
        <di:waypoint xsi:type="dc:Point" x="1471" y="171" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1449" y="149.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="EventBasedGateway_1ho472d_di" bpmnElement="ExclusiveGateway_12ylcgi">
        <dc:Bounds x="1471" y="146" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1495.1135265700484" y="199" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="IntermediateCatchEvent_09tc0wh_di" bpmnElement="IntermediateCatchEvent_09tc0wh">
        <dc:Bounds x="1554.1135265700484" y="250.14492753623188" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1534" y="289" width="77" height="25" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0ftjyrx_di" bpmnElement="SequenceFlow_0ftjyrx">
        <di:waypoint xsi:type="dc:Point" x="1496" y="196" />
        <di:waypoint xsi:type="dc:Point" x="1496" y="268" />
        <di:waypoint xsi:type="dc:Point" x="1554" y="268" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1511" y="225" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="IntermediateCatchEvent_087fl8m_di" bpmnElement="IntermediateCatchEvent_087fl8m">
        <dc:Bounds x="1554" y="153" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1545" y="192" width="54" height="37" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1vsv7r8_di" bpmnElement="SequenceFlow_1vsv7r8">
        <di:waypoint xsi:type="dc:Point" x="1521" y="171" />
        <di:waypoint xsi:type="dc:Point" x="1554" y="171" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1537.5" y="149" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="IntermediateCatchEvent_12qf66u_di" bpmnElement="IntermediateCatchEvent_12qf66u">
        <dc:Bounds x="1554" y="82.38043478260875" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1544" y="121" width="57" height="25" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0jd8d0i_di" bpmnElement="SequenceFlow_0jd8d0i">
        <di:waypoint xsi:type="dc:Point" x="1496" y="146" />
        <di:waypoint xsi:type="dc:Point" x="1496" y="100" />
        <di:waypoint xsi:type="dc:Point" x="1554" y="100" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1511" y="116.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Task_0e0mu6c_di" bpmnElement="Task_0e0mu6c">
        <dc:Bounds x="1630.579575596817" y="131" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0zdc0ci_di" bpmnElement="SequenceFlow_0zdc0ci">
        <di:waypoint xsi:type="dc:Point" x="1590" y="171" />
        <di:waypoint xsi:type="dc:Point" x="1631" y="171" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1610.5" y="149.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_10by6md_di" bpmnElement="SequenceFlow_10by6md">
        <di:waypoint xsi:type="dc:Point" x="1590" y="100" />
        <di:waypoint xsi:type="dc:Point" x="1681" y="100" />
        <di:waypoint xsi:type="dc:Point" x="1681" y="131" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1635.5" y="78.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="EndEvent_0swhjpo_di" bpmnElement="EndEvent_0swhjpo">
        <dc:Bounds x="1768.579575596817" y="153" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1746" y="192" width="83" height="24" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1p7rbgq_di" bpmnElement="SequenceFlow_1p7rbgq">
        <di:waypoint xsi:type="dc:Point" x="1731" y="171" />
        <di:waypoint xsi:type="dc:Point" x="1769" y="171" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1750" y="149.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0rkllvh_di" bpmnElement="SequenceFlow_0rkllvh">
        <di:waypoint xsi:type="dc:Point" x="1590" y="268" />
        <di:waypoint xsi:type="dc:Point" x="1635" y="268" />
        <di:waypoint xsi:type="dc:Point" x="1635" y="490" />
        <di:waypoint xsi:type="dc:Point" x="246" y="490" />
        <di:waypoint xsi:type="dc:Point" x="246" y="211" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1605" y="372.5" width="90" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_130hgg8_di" bpmnElement="SequenceFlow_130hgg8">
        <di:waypoint xsi:type="dc:Point" x="163" y="171" />
        <di:waypoint xsi:type="dc:Point" x="196" y="171" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="179.5" y="149.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="UserTask_1rlipu4_di" bpmnElement="Task_026c0id">
        <dc:Bounds x="63" y="131" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="UserTask_0kibayb_di" bpmnElement="Task_0p47z7h">
        <dc:Bounds x="490" y="131" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="ExclusiveGateway_13kuced_di" bpmnElement="ExclusiveGateway_13kuced" isMarkerVisible="true">
        <dc:Bounds x="332.07244501940494" y="146" width="50" height="50" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="328" y="199" width="58" height="24" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1qdqk69_di" bpmnElement="SequenceFlow_1qdqk69" bioc:stroke="#000">
        <di:waypoint xsi:type="dc:Point" x="382" y="171" />
        <di:waypoint xsi:type="dc:Point" x="490" y="171" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="384.49367088607596" y="151" width="84" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_091wldx_di" bpmnElement="SequenceFlow_091wldx" bioc:stroke="#000">
        <di:waypoint xsi:type="dc:Point" x="357" y="146" />
        <di:waypoint xsi:type="dc:Point" x="357" y="-123" />
        <di:waypoint xsi:type="dc:Point" x="719" y="-123" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="362" y="78.75518815120985" width="83" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="SubProcess_1utqdnk_di" bpmnElement="Task_1ept7kl" isExpanded="true">
        <dc:Bounds x="719" y="-222" width="410" height="197" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0zjbpms_di" bpmnElement="SequenceFlow_0zjbpms">
        <di:waypoint xsi:type="dc:Point" x="1129" y="-123" />
        <di:waypoint xsi:type="dc:Point" x="1377" y="-123" />
        <di:waypoint xsi:type="dc:Point" x="1377" y="131" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1253" y="-144.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="StartEvent_13lmuqn_di" bpmnElement="StartEvent_13lmuqn">
        <dc:Bounds x="750.4489795918366" y="-137.17551020408166" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="728" y="-98" width="83" height="25" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_180wh31_di" bpmnElement="Task_180wh31">
        <dc:Bounds x="829.4489795918366" y="-159" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_17nxcr4_di" bpmnElement="SequenceFlow_17nxcr4">
        <di:waypoint xsi:type="dc:Point" x="786" y="-119" />
        <di:waypoint xsi:type="dc:Point" x="829" y="-119" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="807.5" y="-140.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_10zdsna_di" bpmnElement="SequenceFlow_10zdsna">
        <di:waypoint xsi:type="dc:Point" x="929" y="-119" />
        <di:waypoint xsi:type="dc:Point" x="964" y="-119" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="946.5" y="-140.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="IntermediateCatchEvent_0wcdcvo_di" bpmnElement="IntermediateThrowEvent_10vhtou">
        <dc:Bounds x="964.4489795918366" y="-137" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="940.4489795918366" y="-98" width="84" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_1qnlj46_di" bpmnElement="EndEvent_1qnlj46">
        <dc:Bounds x="1057.2726543704891" y="-137" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1035" y="-98" width="83" height="25" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0z16g3i_di" bpmnElement="SequenceFlow_0z16g3i">
        <di:waypoint xsi:type="dc:Point" x="1000" y="-119" />
        <di:waypoint xsi:type="dc:Point" x="1057" y="-119" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1028.5" y="-140.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_1364l2a_di" bpmnElement="SequenceFlow_1364l2a">
        <di:waypoint xsi:type="dc:Point" x="296" y="171" />
        <di:waypoint xsi:type="dc:Point" x="332" y="171" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="314" y="149.5" width="0" height="13" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="UserTask_0m3dsxi_di" bpmnElement="Task_0po6mda">
        <dc:Bounds x="196" y="131" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BoundaryEvent_1ufpi4t_di" bpmnElement="BoundaryEvent_07intkn">
        <dc:Bounds x="1111" y="-202" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1152" y="-216" width="47" height="24" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0lmdz0d_di" bpmnElement="SequenceFlow_0lmdz0d">
        <di:waypoint xsi:type="dc:Point" x="1147" y="-184" />
        <di:waypoint xsi:type="dc:Point" x="1787" y="-184" />
        <di:waypoint xsi:type="dc:Point" x="1787" y="153" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1467" y="-205" width="0" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0zxk9aa_di" bpmnElement="SequenceFlow_0zxk9aa">
        <di:waypoint xsi:type="dc:Point" x="1238" y="268" />
        <di:waypoint xsi:type="dc:Point" x="1377" y="268" />
        <di:waypoint xsi:type="dc:Point" x="1377" y="211" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1307.5" y="247" width="0" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="BoundaryEvent_1di82p3_di" bpmnElement="BoundaryEvent_Error">
        <dc:Bounds x="1202" y="250" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1243" y="276" width="27" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="BoundaryEvent_14q1ix1_di" bpmnElement="BoundaryEvent_Timer_non_interrupting">
        <dc:Bounds x="1047" y="324" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1065" y="364" width="0" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_1p2txse_di" bpmnElement="EndEvent_1p2txse">
        <dc:Bounds x="1359" y="397.779" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1377" y="437.779" width="0" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0rgmhwk_di" bpmnElement="SequenceFlow_0rgmhwk">
        <di:waypoint xsi:type="dc:Point" x="1065" y="360" />
        <di:waypoint xsi:type="dc:Point" x="1065" y="416" />
        <di:waypoint xsi:type="dc:Point" x="1170" y="416" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1080" y="382" width="0" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Task_1u7pqoy_di" bpmnElement="Task_1u7pqoy">
        <dc:Bounds x="1170" y="376" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0j9ajgx_di" bpmnElement="SequenceFlow_0j9ajgx">
        <di:waypoint xsi:type="dc:Point" x="1270" y="416" />
        <di:waypoint xsi:type="dc:Point" x="1359" y="416" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="1314.5" y="395" width="0" height="12" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`

const sample_2 =
    `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2">
<process id="Process_1" isExecutable="false">
    <startEvent id="StartEvent_1y45yut" name="开始">
    <outgoing>SequenceFlow_0h21x7r</outgoing>
    </startEvent>
    <task id="Task_1hcentk">
    <incoming>SequenceFlow_0h21x7r</incoming>
    </task>
    <sequenceFlow id="SequenceFlow_0h21x7r" sourceRef="StartEvent_1y45yut" targetRef="Task_1hcentk" />
</process>
<bpmndi:BPMNDiagram id="BpmnDiagram_1">
    <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
    <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">
        <omgdc:Bounds x="152" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
        <omgdc:Bounds x="160" y="145" width="22" height="14" />
        </bpmndi:BPMNLabel>
    </bpmndi:BPMNShape>
    <bpmndi:BPMNShape id="Task_1hcentk_di" bpmnElement="Task_1hcentk">
        <omgdc:Bounds x="240" y="80" width="100" height="80" />
    </bpmndi:BPMNShape>
    <bpmndi:BPMNEdge id="SequenceFlow_0h21x7r_di" bpmnElement="SequenceFlow_0h21x7r">
        <omgdi:waypoint x="188" y="120" />
        <omgdi:waypoint x="240" y="120" />
    </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
</bpmndi:BPMNDiagram>
</definitions>`
const sample_3 =
    `
<?xml version="1.0" standalone="yes"?>
<semantic:definitions id="_1275940932088" targetNamespace="http://www.trisotech.com/definitions/_1275940932088" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:semantic="http://www.omg.org/spec/BPMN/20100524/MODEL">
    <semantic:message id="_1275940932310"/>
    <semantic:message id="_1275940932433"/>
    <semantic:process isExecutable="false" id="_6-1">
        <semantic:laneSet id="ls_6-438">
            <semantic:lane name="clerk" id="_6-650">
                <semantic:flowNodeRef>_6-450</semantic:flowNodeRef>
                <semantic:flowNodeRef>_6-652</semantic:flowNodeRef>
                <semantic:flowNodeRef>_6-674</semantic:flowNodeRef>
                <semantic:flowNodeRef>_6-695</semantic:flowNodeRef>
            </semantic:lane>
            <semantic:lane name="pizza chef" id="_6-446">
                <semantic:flowNodeRef>_6-463</semantic:flowNodeRef>
            </semantic:lane>
            <semantic:lane name="delivery boy" id="_6-448">
                <semantic:flowNodeRef>_6-514</semantic:flowNodeRef>
                <semantic:flowNodeRef>_6-565</semantic:flowNodeRef>
                <semantic:flowNodeRef>_6-616</semantic:flowNodeRef>
            </semantic:lane>
        </semantic:laneSet>
        <semantic:startEvent name="Order received" id="_6-450">
            <semantic:outgoing>_6-630</semantic:outgoing>
            <semantic:messageEventDefinition messageRef="_1275940932310"/>
        </semantic:startEvent>
        <semantic:parallelGateway gatewayDirection="Unspecified" name="" id="_6-652">
            <semantic:incoming>_6-630</semantic:incoming>
            <semantic:outgoing>_6-691</semantic:outgoing>
            <semantic:outgoing>_6-693</semantic:outgoing>
        </semantic:parallelGateway>
        <semantic:intermediateCatchEvent parallelMultiple="false" name="&#8222;where is my pizza?&#8220;" id="_6-674">
            <semantic:incoming>_6-691</semantic:incoming>
            <semantic:incoming>_6-746</semantic:incoming>
            <semantic:outgoing>_6-748</semantic:outgoing>
            <semantic:messageEventDefinition messageRef="_1275940932433"/>
        </semantic:intermediateCatchEvent>
        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Calm customer" id="_6-695">
            <semantic:incoming>_6-748</semantic:incoming>
            <semantic:outgoing>_6-746</semantic:outgoing>
        </semantic:task>
        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Bake the pizza" id="_6-463">
            <semantic:incoming>_6-693</semantic:incoming>
            <semantic:outgoing>_6-632</semantic:outgoing>
        </semantic:task>
        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Deliver the pizza" id="_6-514">
            <semantic:incoming>_6-632</semantic:incoming>
            <semantic:outgoing>_6-634</semantic:outgoing>
        </semantic:task>
        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Receive payment" id="_6-565">
            <semantic:incoming>_6-634</semantic:incoming>
            <semantic:outgoing>_6-636</semantic:outgoing>
        </semantic:task>
        <semantic:endEvent name="" id="_6-616">
            <semantic:incoming>_6-636</semantic:incoming>
            <semantic:terminateEventDefinition/>
        </semantic:endEvent>
        <semantic:sequenceFlow sourceRef="_6-450" targetRef="_6-652" name="" id="_6-630"/>
        <semantic:sequenceFlow sourceRef="_6-463" targetRef="_6-514" name="" id="_6-632"/>
        <semantic:sequenceFlow sourceRef="_6-514" targetRef="_6-565" name="" id="_6-634"/>
        <semantic:sequenceFlow sourceRef="_6-565" targetRef="_6-616" name="" id="_6-636"/>
        <semantic:sequenceFlow sourceRef="_6-652" targetRef="_6-674" name="" id="_6-691"/>
        <semantic:sequenceFlow sourceRef="_6-652" targetRef="_6-463" name="" id="_6-693"/>
        <semantic:sequenceFlow sourceRef="_6-695" targetRef="_6-674" name="" id="_6-746"/>
        <semantic:sequenceFlow sourceRef="_6-674" targetRef="_6-695" name="" id="_6-748"/>
    </semantic:process>
    <semantic:message id="_1275940932198"/>
    <semantic:process isExecutable="false" id="_6-2">
        <semantic:startEvent name="Hungry for pizza" id="_6-61">
            <semantic:outgoing>_6-125</semantic:outgoing>
        </semantic:startEvent>
        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Select a pizza" id="_6-74">
            <semantic:incoming>_6-125</semantic:incoming>
            <semantic:outgoing>_6-178</semantic:outgoing>
        </semantic:task>
        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Order a pizza" id="_6-127">
            <semantic:incoming>_6-178</semantic:incoming>
            <semantic:outgoing>_6-420</semantic:outgoing>
        </semantic:task>
        <semantic:eventBasedGateway eventGatewayType="Exclusive" instantiate="false" gatewayDirection="Unspecified" name="" id="_6-180">
            <semantic:incoming>_6-420</semantic:incoming>
            <semantic:incoming>_6-430</semantic:incoming>
            <semantic:outgoing>_6-422</semantic:outgoing>
            <semantic:outgoing>_6-424</semantic:outgoing>
        </semantic:eventBasedGateway>
        <semantic:intermediateCatchEvent parallelMultiple="false" name="pizza received" id="_6-202">
            <semantic:incoming>_6-422</semantic:incoming>
            <semantic:outgoing>_6-428</semantic:outgoing>
            <semantic:messageEventDefinition messageRef="_1275940932198"/>
        </semantic:intermediateCatchEvent>
        <semantic:intermediateCatchEvent parallelMultiple="false" name="60 minutes" id="_6-219">
            <semantic:incoming>_6-424</semantic:incoming>
            <semantic:outgoing>_6-426</semantic:outgoing>
            <semantic:timerEventDefinition>
                <semantic:timeDate/>
            </semantic:timerEventDefinition>
        </semantic:intermediateCatchEvent>
        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Ask for the pizza" id="_6-236">
            <semantic:incoming>_6-426</semantic:incoming>
            <semantic:outgoing>_6-430</semantic:outgoing>
        </semantic:task>
        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Pay the pizza" id="_6-304">
            <semantic:incoming>_6-428</semantic:incoming>
            <semantic:outgoing>_6-434</semantic:outgoing>
        </semantic:task>
        <semantic:task completionQuantity="1" isForCompensation="false" startQuantity="1" name="Eat the pizza" id="_6-355">
            <semantic:incoming>_6-434</semantic:incoming>
            <semantic:outgoing>_6-436</semantic:outgoing>
        </semantic:task>
        <semantic:endEvent name="Hunger satisfied" id="_6-406">
            <semantic:incoming>_6-436</semantic:incoming>
        </semantic:endEvent>
        <semantic:sequenceFlow sourceRef="_6-61" targetRef="_6-74" name="" id="_6-125"/>
        <semantic:sequenceFlow sourceRef="_6-74" targetRef="_6-127" name="" id="_6-178"/>
        <semantic:sequenceFlow sourceRef="_6-127" targetRef="_6-180" name="" id="_6-420"/>
        <semantic:sequenceFlow sourceRef="_6-180" targetRef="_6-202" name="" id="_6-422"/>
        <semantic:sequenceFlow sourceRef="_6-180" targetRef="_6-219" name="" id="_6-424"/>
        <semantic:sequenceFlow sourceRef="_6-219" targetRef="_6-236" name="" id="_6-426"/>
        <semantic:sequenceFlow sourceRef="_6-202" targetRef="_6-304" name="" id="_6-428"/>
        <semantic:sequenceFlow sourceRef="_6-236" targetRef="_6-180" name="" id="_6-430"/>
        <semantic:sequenceFlow sourceRef="_6-304" targetRef="_6-355" name="" id="_6-434"/>
        <semantic:sequenceFlow sourceRef="_6-355" targetRef="_6-406" name="" id="_6-436"/>
    </semantic:process>
    <semantic:collaboration id="C1275940932557">
        <semantic:participant name="Pizza Customer" processRef="_6-2" id="_6-53"/>
        <semantic:participant name="Pizza vendor" processRef="_6-1" id="_6-438"/>
        <semantic:messageFlow name="pizza order" sourceRef="_6-127" targetRef="_6-450" id="_6-638"/>
        <semantic:messageFlow name="" sourceRef="_6-236" targetRef="_6-674" id="_6-642"/>
        <semantic:messageFlow name="receipt" sourceRef="_6-565" targetRef="_6-304" id="_6-646"/>
        <semantic:messageFlow name="money" sourceRef="_6-304" targetRef="_6-565" id="_6-648"/>
        <semantic:messageFlow name="pizza" sourceRef="_6-514" targetRef="_6-202" id="_6-640"/>
        <semantic:messageFlow name="" sourceRef="_6-695" targetRef="_6-236" id="_6-750"/>
    </semantic:collaboration>
    <bpmndi:BPMNDiagram documentation="" id="Trisotech.Visio-_6" name="Untitled Diagram" resolution="96.00000267028808">
        <bpmndi:BPMNPlane bpmnElement="C1275940932557">
            <bpmndi:BPMNShape bpmnElement="_6-53" isHorizontal="true" id="Trisotech.Visio__6-53">
                <dc:Bounds height="294.0" width="1044.0" x="12.0" y="12.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-438" isHorizontal="true" id="Trisotech.Visio__6-438">
                <dc:Bounds height="337.0" width="905.0" x="12.0" y="372.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-650" isHorizontal="true" id="Trisotech.Visio__6__6-650">
                <dc:Bounds height="114.0" width="875.0" x="42.0" y="372.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-446" isHorizontal="true" id="Trisotech.Visio__6__6-446">
                <dc:Bounds height="114.0" width="875.0" x="42.0" y="486.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-448" isHorizontal="true" id="Trisotech.Visio__6__6-448">
                <dc:Bounds height="109.0" width="875.0" x="42.0" y="600.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-450" id="Trisotech.Visio__6__6-450">
                <dc:Bounds height="30.0" width="30.0" x="79.0" y="405.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-652" id="Trisotech.Visio__6__6-652">
                <dc:Bounds height="42.0" width="42.0" x="140.0" y="399.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-674" id="Trisotech.Visio__6__6-674">
                <dc:Bounds height="32.0" width="32.0" x="218.0" y="404.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-695" id="Trisotech.Visio__6__6-695">
                <dc:Bounds height="68.0" width="83.0" x="286.0" y="386.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-463" id="Trisotech.Visio__6__6-463">
                <dc:Bounds height="68.0" width="83.0" x="252.0" y="521.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-514" id="Trisotech.Visio__6__6-514">
                <dc:Bounds height="68.0" width="83.0" x="464.0" y="629.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-565" id="Trisotech.Visio__6__6-565">
                <dc:Bounds height="68.0" width="83.0" x="603.0" y="629.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-616" id="Trisotech.Visio__6__6-616">
                <dc:Bounds height="32.0" width="32.0" x="722.0" y="647.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-61" id="Trisotech.Visio__6__6-61">
                <dc:Bounds height="30.0" width="30.0" x="66.0" y="96.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-74" id="Trisotech.Visio__6__6-74">
                <dc:Bounds height="68.0" width="83.0" x="145.0" y="77.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-127" id="Trisotech.Visio__6__6-127">
                <dc:Bounds height="68.0" width="83.0" x="265.0" y="77.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-180" id="Trisotech.Visio__6__6-180">
                <dc:Bounds height="42.0" width="42.0" x="378.0" y="90.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-202" id="Trisotech.Visio__6__6-202">
                <dc:Bounds height="32.0" width="32.0" x="647.0" y="95.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-219" id="Trisotech.Visio__6__6-219">
                <dc:Bounds height="32.0" width="32.0" x="448.0" y="184.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-236" id="Trisotech.Visio__6__6-236">
                <dc:Bounds height="68.0" width="83.0" x="517.0" y="166.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-304" id="Trisotech.Visio__6__6-304">
                <dc:Bounds height="68.0" width="83.0" x="726.0" y="77.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-355" id="Trisotech.Visio__6__6-355">
                <dc:Bounds height="68.0" width="83.0" x="834.0" y="77.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape bpmnElement="_6-406" id="Trisotech.Visio__6__6-406">
                <dc:Bounds height="32.0" width="32.0" x="956.0" y="95.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNEdge bpmnElement="_6-640" messageVisibleKind="initiating" id="Trisotech.Visio__6__6-640">
                <di:waypoint x="506.0" y="629.0"/>
                <di:waypoint x="506.0" y="384.0"/>
                <di:waypoint x="663.0" y="384.0"/>
                <di:waypoint x="663.0" y="127.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-630" id="Trisotech.Visio__6__6-630">
                <di:waypoint x="109.0" y="420.0"/>
                <di:waypoint x="140.0" y="420.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-691" id="Trisotech.Visio__6__6-691">
                <di:waypoint x="182.0" y="420.0"/>
                <di:waypoint x="200.0" y="420.0"/>
                <di:waypoint x="218.0" y="420.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-648" messageVisibleKind="initiating" id="Trisotech.Visio__6__6-648">
                <di:waypoint x="754.0" y="145.0"/>
                <di:waypoint x="754.0" y="408.0"/>
                <di:waypoint x="630.0" y="408.0"/>
                <di:waypoint x="631.0" y="629.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-422" id="Trisotech.Visio__6__6-422">
                <di:waypoint x="420.0" y="111.0"/>
                <di:waypoint x="438.0" y="111.0"/>
                <di:waypoint x="647.0" y="111.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-646" messageVisibleKind="non_initiating" id="Trisotech.Visio__6__6-646">
                <di:waypoint x="658.0" y="629.0"/>
                <di:waypoint x="658.0" y="432.0"/>
                <di:waypoint x="782.0" y="432.0"/>
                <di:waypoint x="782.0" y="145.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-428" id="Trisotech.Visio__6__6-428">
                <di:waypoint x="679.0" y="111.0"/>
                <di:waypoint x="726.0" y="111.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-748" id="Trisotech.Visio__6__6-748">
                <di:waypoint x="250.0" y="420.0"/>
                <di:waypoint x="268.0" y="420.0"/>
                <di:waypoint x="286.0" y="420.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-420" id="Trisotech.Visio__6__6-420">
                <di:waypoint x="348.0" y="111.0"/>
                <di:waypoint x="366.0" y="111.0"/>
                <di:waypoint x="378.0" y="111.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-636" id="Trisotech.Visio__6__6-636">
                <di:waypoint x="686.0" y="663.0"/>
                <di:waypoint x="704.0" y="663.0"/>
                <di:waypoint x="722.0" y="663.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-750" id="Trisotech.Visio__6__6-750">
                <di:waypoint x="328.0" y="386.0"/>
                <di:waypoint x="328.0" y="348.0"/>
                <di:waypoint x="572.0" y="348.0"/>
                <di:waypoint x="572.0" y="234.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-436" id="Trisotech.Visio__6__6-436">
                <di:waypoint x="918.0" y="111.0"/>
                <di:waypoint x="936.0" y="111.0"/>
                <di:waypoint x="956.0" y="111.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-632" id="Trisotech.Visio__6__6-632">
                <di:waypoint x="335.0" y="555.0"/>
                <di:waypoint x="353.0" y="555.0"/>
                <di:waypoint x="353.0" y="663.0"/>
                <di:waypoint x="464.0" y="663.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-634" id="Trisotech.Visio__6__6-634">
                <di:waypoint x="548.0" y="663.0"/>
                <di:waypoint x="603.0" y="663.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-125" id="Trisotech.Visio__6__6-125">
                <di:waypoint x="96.0" y="111.0"/>
                <di:waypoint x="114.0" y="111.0"/>
                <di:waypoint x="145.0" y="111.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-430" id="Trisotech.Visio__6__6-430">
                <di:waypoint x="600.0" y="200.0"/>
                <di:waypoint x="618.0" y="200.0"/>
                <di:waypoint x="618.0" y="252.0"/>
                <di:waypoint x="576.0" y="252.0"/>
                <di:waypoint x="549.0" y="252.0"/>
                <di:waypoint x="360.0" y="252.0"/>
                <di:waypoint x="360.0" y="111.0"/>
                <di:waypoint x="378.0" y="111.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-642" id="Trisotech.Visio__6__6-642">
                <di:waypoint x="545.0" y="234.0"/>
                <di:waypoint x="545.0" y="324.0"/>
                <di:waypoint x="234.0" y="324.0"/>
                <di:waypoint x="234.0" y="404.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-424" id="Trisotech.Visio__6__6-424">
                <di:waypoint x="399.0" y="132.0"/>
                <di:waypoint x="399.0" y="200.0"/>
                <di:waypoint x="448.0" y="200.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-638" messageVisibleKind="initiating" id="Trisotech.Visio__6__6-638">
                <di:waypoint x="306.0" y="145.0"/>
                <di:waypoint x="306.0" y="252.0"/>
                <di:waypoint x="94.0" y="252.0"/>
                <di:waypoint x="94.0" y="405.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-426" id="Trisotech.Visio__6__6-426">
                <di:waypoint x="480.0" y="200.0"/>
                <di:waypoint x="498.0" y="200.0"/>
                <di:waypoint x="517.0" y="200.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-693" id="Trisotech.Visio__6__6-693">
                <di:waypoint x="161.0" y="441.0"/>
                <di:waypoint x="161.0" y="556.0"/>
                <di:waypoint x="252.0" y="555.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-178" id="Trisotech.Visio__6__6-178">
                <di:waypoint x="228.0" y="111.0"/>
                <di:waypoint x="265.0" y="111.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-746" id="Trisotech.Visio__6__6-746">
                <di:waypoint x="370.0" y="420.0"/>
                <di:waypoint x="386.0" y="420.0"/>
                <di:waypoint x="386.0" y="474.0"/>
                <di:waypoint x="191.0" y="474.0"/>
                <di:waypoint x="191.0" y="420.0"/>
                <di:waypoint x="218.0" y="420.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge bpmnElement="_6-434" id="Trisotech.Visio__6__6-434">
                <di:waypoint x="810.0" y="111.0"/>
                <di:waypoint x="834.0" y="111.0"/>
                <bpmndi:BPMNLabel/>
            </bpmndi:BPMNEdge>
        </bpmndi:BPMNPlane>
    </bpmndi:BPMNDiagram>
</semantic:definitions>

	`
const sample_4 =
    `
	<?xml version="1.0" encoding="UTF-8"?>
	<semantic:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:semantic="http://www.omg.org/spec/BPMN/20100524/MODEL" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd" id="_1275940932088" exporter="camunda modeler" exporterVersion="2.5.0" targetNamespace="http://www.trisotech.com/definitions/_1275940932088">
	  <semantic:message id="_1275940932310"/>
	  <semantic:message id="_1275940932433"/>
	  <semantic:process id="_6-1" isExecutable="false">
	    <semantic:laneSet id="ls_6-438">
	      <semantic:lane id="_6-650" name="clerk">
	        <semantic:flowNodeRef>_6-450</semantic:flowNodeRef>
	        <semantic:flowNodeRef>_6-652</semantic:flowNodeRef>
	        <semantic:flowNodeRef>_6-695</semantic:flowNodeRef>
	        <semantic:flowNodeRef>ManualTask_1</semantic:flowNodeRef>
	      </semantic:lane>
	      <semantic:lane id="_6-446" name="pizza chef">
	        <semantic:flowNodeRef>_6-463</semantic:flowNodeRef>
	      </semantic:lane>
	      <semantic:lane id="_6-448" name="delivery boy">
	        <semantic:flowNodeRef>_6-514</semantic:flowNodeRef>
	        <semantic:flowNodeRef>_6-565</semantic:flowNodeRef>
	        <semantic:flowNodeRef>_6-616</semantic:flowNodeRef>
	      </semantic:lane>
	    </semantic:laneSet>
	    <semantic:startEvent id="_6-450" name="Order received">
	      <semantic:outgoing>_6-630</semantic:outgoing>
	      <semantic:messageEventDefinition messageRef="_1275940932310"/>
	    </semantic:startEvent>
	    <semantic:parallelGateway id="_6-652" name="">
	      <semantic:incoming>_6-630</semantic:incoming>
	      <semantic:outgoing>_6-693</semantic:outgoing>
	    </semantic:parallelGateway>
	    <semantic:task id="_6-695" name="Calm customer"/>
	    <semantic:task id="_6-463" name="Bake the pizza">
	      <semantic:incoming>_6-693</semantic:incoming>
	      <semantic:outgoing>_6-632</semantic:outgoing>
	    </semantic:task>
	    <semantic:task id="_6-514" name="Deliver the pizza">
	      <semantic:incoming>_6-632</semantic:incoming>
	      <semantic:outgoing>_6-634</semantic:outgoing>
	    </semantic:task>
	    <semantic:task id="_6-565" name="Receive payment">
	      <semantic:incoming>_6-634</semantic:incoming>
	      <semantic:outgoing>_6-636</semantic:outgoing>
	    </semantic:task>
	    <semantic:endEvent id="_6-616" name="">
	      <semantic:incoming>_6-636</semantic:incoming>
	      <semantic:terminateEventDefinition/>
	    </semantic:endEvent>
	    <semantic:sequenceFlow id="_6-630" name="" sourceRef="_6-450" targetRef="_6-652"/>
	    <semantic:sequenceFlow id="_6-632" name="" sourceRef="_6-463" targetRef="_6-514"/>
	    <semantic:sequenceFlow id="_6-634" name="" sourceRef="_6-514" targetRef="_6-565"/>
	    <semantic:sequenceFlow id="_6-636" name="" sourceRef="_6-565" targetRef="_6-616"/>
	    <semantic:sequenceFlow id="_6-693" name="" sourceRef="_6-652" targetRef="_6-463"/>
	    <semantic:manualTask id="ManualTask_1" name="what ever"/>
	  </semantic:process>
	  <semantic:message id="_1275940932198"/>
	  <semantic:process id="_6-2" isExecutable="false">
	    <semantic:startEvent id="_6-61" name="Hungry for pizza"/>
	    <semantic:task id="_6-127" name="Order Pasta!">
	      <semantic:outgoing>_6-420</semantic:outgoing>
	    </semantic:task>
	    <semantic:eventBasedGateway id="_6-180" name="">
	      <semantic:incoming>_6-420</semantic:incoming>
	      <semantic:incoming>_6-430</semantic:incoming>
	      <semantic:outgoing>_6-422</semantic:outgoing>
	      <semantic:outgoing>_6-424</semantic:outgoing>
	    </semantic:eventBasedGateway>
	    <semantic:intermediateCatchEvent id="_6-202" name="pizza received">
	      <semantic:incoming>_6-422</semantic:incoming>
	      <semantic:outgoing>_6-428</semantic:outgoing>
	      <semantic:messageEventDefinition messageRef="_1275940932198"/>
	    </semantic:intermediateCatchEvent>
	    <semantic:intermediateCatchEvent id="_6-219" name="60 minutes">
	      <semantic:incoming>_6-424</semantic:incoming>
	      <semantic:outgoing>_6-426</semantic:outgoing>
	      <semantic:timerEventDefinition>
	        <semantic:timeDate xsi:type="semantic:tFormalExpression"/>
	      </semantic:timerEventDefinition>
	    </semantic:intermediateCatchEvent>
	    <semantic:task id="_6-236" name="Ask for the pizza">
	      <semantic:incoming>_6-426</semantic:incoming>
	      <semantic:outgoing>_6-430</semantic:outgoing>
	    </semantic:task>
	    <semantic:task id="_6-304" name="Pay the pizza">
	      <semantic:incoming>_6-428</semantic:incoming>
	      <semantic:outgoing>_6-434</semantic:outgoing>
	    </semantic:task>
	    <semantic:task id="_6-355" name="Eat the pizza">
	      <semantic:incoming>_6-434</semantic:incoming>
	      <semantic:outgoing>_6-436</semantic:outgoing>
	    </semantic:task>
	    <semantic:endEvent id="_6-406" name="Hunger satisfied">
	      <semantic:incoming>_6-436</semantic:incoming>
	    </semantic:endEvent>
	    <semantic:sequenceFlow id="_6-420" name="" sourceRef="_6-127" targetRef="_6-180"/>
	    <semantic:sequenceFlow id="_6-422" name="" sourceRef="_6-180" targetRef="_6-202"/>
	    <semantic:sequenceFlow id="_6-424" name="" sourceRef="_6-180" targetRef="_6-219"/>
	    <semantic:sequenceFlow id="_6-426" name="" sourceRef="_6-219" targetRef="_6-236"/>
	    <semantic:sequenceFlow id="_6-428" name="" sourceRef="_6-202" targetRef="_6-304"/>
	    <semantic:sequenceFlow id="_6-430" name="" sourceRef="_6-236" targetRef="_6-180"/>
	    <semantic:sequenceFlow id="_6-434" name="" sourceRef="_6-304" targetRef="_6-355"/>
	    <semantic:sequenceFlow id="_6-436" name="" sourceRef="_6-355" targetRef="_6-406"/>
	    <semantic:exclusiveGateway id="ExclusiveGateway_1"/>
	  </semantic:process>
	  <semantic:collaboration id="C1275940932557">
	    <semantic:participant id="_6-53" name="Pizza Customer" processRef="_6-2"/>
	    <semantic:participant id="_6-438" name="Pizza vendor" processRef="_6-1"/>
	    <semantic:messageFlow id="_6-638" name="pizza order" sourceRef="_6-127" targetRef="_6-450"/>
	    <semantic:messageFlow id="_6-646" name="receipt" sourceRef="_6-565" targetRef="_6-304"/>
	    <semantic:messageFlow id="_6-648" name="money" sourceRef="_6-304" targetRef="_6-565"/>
	    <semantic:messageFlow id="_6-640" name="pizza" sourceRef="_6-514" targetRef="_6-202"/>
	    <semantic:messageFlow id="_6-750" name="" sourceRef="_6-695" targetRef="_6-236"/>
	  </semantic:collaboration>
	  <bpmndi:BPMNDiagram documentation="" id="Trisotech.Visio-_6" name="Untitled Diagram" resolution="96.0">
	    <bpmndi:BPMNPlane bpmnElement="C1275940932557">
	      <bpmndi:BPMNShape id="Trisotech.Visio__6-53" bpmnElement="_6-53" isHorizontal="true">
	        <dc:Bounds height="294.0" width="1044.0" x="12.0" y="12.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6-438" bpmnElement="_6-438" isHorizontal="true">
	        <dc:Bounds height="337.0" width="905.0" x="12.0" y="372.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-650" bpmnElement="_6-650" isHorizontal="true">
	        <dc:Bounds height="114.0" width="875.0" x="42.0" y="372.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-446" bpmnElement="_6-446" isHorizontal="true">
	        <dc:Bounds height="114.0" width="875.0" x="42.0" y="486.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-448" bpmnElement="_6-448" isHorizontal="true">
	        <dc:Bounds height="109.0" width="875.0" x="42.0" y="600.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-450" bpmnElement="_6-450">
	        <dc:Bounds height="30.0" width="30.0" x="79.0" y="405.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-652" bpmnElement="_6-652">
	        <dc:Bounds height="42.0" width="42.0" x="140.0" y="399.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-695" bpmnElement="_6-695">
	        <dc:Bounds height="68.0" width="83.0" x="286.0" y="386.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-463" bpmnElement="_6-463">
	        <dc:Bounds height="68.0" width="83.0" x="252.0" y="521.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-514" bpmnElement="_6-514">
	        <dc:Bounds height="68.0" width="83.0" x="464.0" y="629.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-565" bpmnElement="_6-565">
	        <dc:Bounds height="68.0" width="83.0" x="603.0" y="629.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-616" bpmnElement="_6-616">
	        <dc:Bounds height="32.0" width="32.0" x="722.0" y="647.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-61" bpmnElement="_6-61">
	        <dc:Bounds height="30.0" width="30.0" x="84.0" y="166.0"/>
	        <bpmndi:BPMNLabel>
	          <dc:Bounds height="22.0" width="100.0" x="49.0" y="201.0"/>
	        </bpmndi:BPMNLabel>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-127" bpmnElement="_6-127">
	        <dc:Bounds height="68.0" width="83.0" x="265.0" y="77.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-180" bpmnElement="_6-180">
	        <dc:Bounds height="42.0" width="42.0" x="378.0" y="90.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-202" bpmnElement="_6-202">
	        <dc:Bounds height="32.0" width="32.0" x="647.0" y="95.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-219" bpmnElement="_6-219">
	        <dc:Bounds height="32.0" width="32.0" x="448.0" y="184.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-236" bpmnElement="_6-236">
	        <dc:Bounds height="68.0" width="83.0" x="517.0" y="166.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-304" bpmnElement="_6-304">
	        <dc:Bounds height="68.0" width="83.0" x="726.0" y="77.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-355" bpmnElement="_6-355">
	        <dc:Bounds height="68.0" width="83.0" x="834.0" y="77.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="Trisotech.Visio__6__6-406" bpmnElement="_6-406">
	        <dc:Bounds height="32.0" width="32.0" x="956.0" y="95.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-640" bpmnElement="_6-640">
	        <di:waypoint xsi:type="dc:Point" x="506.0" y="629.0"/>
	        <di:waypoint xsi:type="dc:Point" x="506.0" y="384.0"/>
	        <di:waypoint xsi:type="dc:Point" x="663.0" y="384.0"/>
	        <di:waypoint xsi:type="dc:Point" x="663.0" y="127.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-630" bpmnElement="_6-630">
	        <di:waypoint xsi:type="dc:Point" x="109.0" y="420.0"/>
	        <di:waypoint xsi:type="dc:Point" x="140.0" y="420.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-648" bpmnElement="_6-648">
	        <di:waypoint xsi:type="dc:Point" x="754.0" y="145.0"/>
	        <di:waypoint xsi:type="dc:Point" x="754.0" y="408.0"/>
	        <di:waypoint xsi:type="dc:Point" x="630.0" y="408.0"/>
	        <di:waypoint xsi:type="dc:Point" x="631.0" y="629.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-422" bpmnElement="_6-422">
	        <di:waypoint xsi:type="dc:Point" x="420.0" y="111.0"/>
	        <di:waypoint xsi:type="dc:Point" x="438.0" y="111.0"/>
	        <di:waypoint xsi:type="dc:Point" x="647.0" y="111.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-646" bpmnElement="_6-646" messageVisibleKind="non_initiating">
	        <di:waypoint xsi:type="dc:Point" x="658.0" y="629.0"/>
	        <di:waypoint xsi:type="dc:Point" x="658.0" y="432.0"/>
	        <di:waypoint xsi:type="dc:Point" x="782.0" y="432.0"/>
	        <di:waypoint xsi:type="dc:Point" x="782.0" y="145.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-428" bpmnElement="_6-428">
	        <di:waypoint xsi:type="dc:Point" x="679.0" y="111.0"/>
	        <di:waypoint xsi:type="dc:Point" x="726.0" y="111.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-420" bpmnElement="_6-420">
	        <di:waypoint xsi:type="dc:Point" x="348.0" y="111.0"/>
	        <di:waypoint xsi:type="dc:Point" x="366.0" y="111.0"/>
	        <di:waypoint xsi:type="dc:Point" x="378.0" y="111.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-636" bpmnElement="_6-636">
	        <di:waypoint xsi:type="dc:Point" x="686.0" y="663.0"/>
	        <di:waypoint xsi:type="dc:Point" x="704.0" y="663.0"/>
	        <di:waypoint xsi:type="dc:Point" x="722.0" y="663.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-750" bpmnElement="_6-750">
	        <di:waypoint xsi:type="dc:Point" x="328.0" y="386.0"/>
	        <di:waypoint xsi:type="dc:Point" x="328.0" y="348.0"/>
	        <di:waypoint xsi:type="dc:Point" x="572.0" y="348.0"/>
	        <di:waypoint xsi:type="dc:Point" x="572.0" y="234.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-436" bpmnElement="_6-436">
	        <di:waypoint xsi:type="dc:Point" x="918.0" y="111.0"/>
	        <di:waypoint xsi:type="dc:Point" x="936.0" y="111.0"/>
	        <di:waypoint xsi:type="dc:Point" x="956.0" y="111.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-632" bpmnElement="_6-632">
	        <di:waypoint xsi:type="dc:Point" x="335.0" y="555.0"/>
	        <di:waypoint xsi:type="dc:Point" x="353.0" y="555.0"/>
	        <di:waypoint xsi:type="dc:Point" x="353.0" y="663.0"/>
	        <di:waypoint xsi:type="dc:Point" x="464.0" y="663.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-634" bpmnElement="_6-634">
	        <di:waypoint xsi:type="dc:Point" x="548.0" y="663.0"/>
	        <di:waypoint xsi:type="dc:Point" x="603.0" y="663.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-430" bpmnElement="_6-430">
	        <di:waypoint xsi:type="dc:Point" x="600.0" y="200.0"/>
	        <di:waypoint xsi:type="dc:Point" x="618.0" y="200.0"/>
	        <di:waypoint xsi:type="dc:Point" x="618.0" y="252.0"/>
	        <di:waypoint xsi:type="dc:Point" x="576.0" y="252.0"/>
	        <di:waypoint xsi:type="dc:Point" x="549.0" y="252.0"/>
	        <di:waypoint xsi:type="dc:Point" x="360.0" y="252.0"/>
	        <di:waypoint xsi:type="dc:Point" x="360.0" y="111.0"/>
	        <di:waypoint xsi:type="dc:Point" x="378.0" y="111.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-424" bpmnElement="_6-424">
	        <di:waypoint xsi:type="dc:Point" x="399.0" y="132.0"/>
	        <di:waypoint xsi:type="dc:Point" x="399.0" y="200.0"/>
	        <di:waypoint xsi:type="dc:Point" x="448.0" y="200.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-638" bpmnElement="_6-638">
	        <di:waypoint xsi:type="dc:Point" x="306.0" y="145.0"/>
	        <di:waypoint xsi:type="dc:Point" x="306.0" y="252.0"/>
	        <di:waypoint xsi:type="dc:Point" x="94.0" y="252.0"/>
	        <di:waypoint xsi:type="dc:Point" x="94.0" y="405.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-426" bpmnElement="_6-426">
	        <di:waypoint xsi:type="dc:Point" x="480.0" y="200.0"/>
	        <di:waypoint xsi:type="dc:Point" x="498.0" y="200.0"/>
	        <di:waypoint xsi:type="dc:Point" x="517.0" y="200.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-693" bpmnElement="_6-693">
	        <di:waypoint xsi:type="dc:Point" x="161.0" y="441.0"/>
	        <di:waypoint xsi:type="dc:Point" x="161.0" y="556.0"/>
	        <di:waypoint xsi:type="dc:Point" x="252.0" y="555.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNEdge id="Trisotech.Visio__6__6-434" bpmnElement="_6-434">
	        <di:waypoint xsi:type="dc:Point" x="810.0" y="111.0"/>
	        <di:waypoint xsi:type="dc:Point" x="834.0" y="111.0"/>
	        <bpmndi:BPMNLabel/>
	      </bpmndi:BPMNEdge>
	      <bpmndi:BPMNShape id="_BPMNShape_ExclusiveGateway_97" bpmnElement="ExclusiveGateway_1" isMarkerVisible="true">
	        <dc:Bounds height="42.0" width="42.0" x="156.0" y="90.0"/>
	        <bpmndi:BPMNLabel>
	          <dc:Bounds height="0.0" width="0.0" x="177.0" y="137.0"/>
	        </bpmndi:BPMNLabel>
	      </bpmndi:BPMNShape>
	      <bpmndi:BPMNShape id="_BPMNShape_ManualTask_2" bpmnElement="ManualTask_1">
	        <dc:Bounds height="68.0" width="83.0" x="192.0" y="405.0"/>
	      </bpmndi:BPMNShape>
	    </bpmndi:BPMNPlane>
	  </bpmndi:BPMNDiagram>
	</semantic:definitions>
	`
export default {
    One: sample_1,
    Two: sample_2,
    Three: sample_3,
    Four: sample_4
}
