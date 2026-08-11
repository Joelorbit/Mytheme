<script lang="ts">
  import Badge from '../ui/Badge.svelte';
  import Button from '../ui/Button.svelte';
  import Card from '../ui/Card.svelte';
  import Input from '../ui/Input.svelte';
  import Textarea from '../ui/Textarea.svelte';
  import Checkbox from '../ui/Checkbox.svelte';
  import Radio from '../ui/Radio.svelte';
  import Switch from '../ui/Switch.svelte';
  import Slider from '../ui/Slider.svelte';
  import Select from '../ui/Select.svelte';
  import Separator from '../ui/Separator.svelte';
  import Tag from '../ui/Tag.svelte';
  import Kbd from '../ui/Kbd.svelte';
  import Avatar from '../ui/Avatar.svelte';
  import AvatarGroup from '../ui/AvatarGroup.svelte';
  import Progress from '../ui/Progress.svelte';
  import Alert from '../ui/Alert.svelte';
  import Tabs from '../ui/Tabs.svelte';
  import Accordion from '../ui/Accordion.svelte';
  import Tooltip from '../ui/Tooltip.svelte';
  import Breadcrumb from '../ui/Breadcrumb.svelte';
  import EmptyState from '../ui/EmptyState.svelte';
  import Skeleton from '../ui/Skeleton.svelte';

  let switchState = $state(true);
  let sliderValue = $state(75);
  let checkedState = $state(true);

  const breadcrumbs = [
    { label: 'Home', href: '#' },
    { label: 'Components', href: '#' },
    { label: 'Showcase' }
  ];

  const accordionItems = [
    { id: '1', title: 'Is it accessible?', content: 'Yes, fully accessible.' },
    { id: '2', title: 'Is it styled?', content: 'Yes, it comes with default styles.' }
  ];
</script>

<section id="components" class="showcase shell">
  <div class="showcase__header">
    <Badge tone="accent">library</Badge>
    <h2 class="heading heading-lg">Complete Component System</h2>
    <p class="body-lg" style="color:var(--text-secondary); max-width:50ch">
      Over 20 hand-crafted, fully accessible UI components built on the tokens system.
    </p>
  </div>

  <div class="showcase__grid">
    <!-- Forms -->
    <Card title="Forms & Inputs" description="Fields, toggles, selections.">
      <div class="showcase__stack">
        <Input label="Email address" placeholder="you@example.com" id="sc-email" />
        <Input label="Password" type="password" value="secret" id="sc-pass" error="Password too short" />
        <Select label="Role" id="sc-role">
          <option>Admin</option>
          <option>User</option>
        </Select>
        <div class="showcase__row">
          <Checkbox label="Remember me" bind:checked={checkedState} id="sc-rem" />
          <Switch label="Notifications" bind:checked={switchState} />
        </div>
        <Radio label="Option A" name="sc-rad" value="a" checked={true} />
        <Slider label="Volume" bind:value={sliderValue} />
      </div>
    </Card>

    <!-- Feedback -->
    <Card title="Feedback & Display" description="Badges, alerts, avatars.">
      <div class="showcase__stack">
        <Alert type="info" title="System update">A new version is available.</Alert>
        <Alert type="warning" title="Warning" dismissable>Your session will expire soon.</Alert>
        
        <div class="showcase__row">
          <Avatar initials="JD" />
          <AvatarGroup avatars={[{initials:'A'},{initials:'B'},{initials:'C'},{initials:'D'},{initials:'E'}]} />
        </div>

        <div class="showcase__row">
          <Tag label="Design" tone="accent" />
          <Tag label="System" tone="complement" removable />
          <Tag label="Error" tone="danger" removable />
        </div>

        <Progress value={65} label="Uploading..." showValue variant="accent" />
        <Progress value={100} size="sm" variant="success" />

        <div class="showcase__row">
          <span class="body-sm">Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd></span>
        </div>
      </div>
    </Card>

    <!-- Interactive & Navigation -->
    <Card title="Interactive" description="Navigation and layout.">
      <div class="showcase__stack">
        <Breadcrumb items={breadcrumbs} />
        <Separator label="or" />
        <Tabs tabs={[{id:'t1', label:'Account'}, {id:'t2', label:'Billing'}]}>
          <div style="padding:var(--space-3); color:var(--text-secondary)">
            Tab content goes here.
          </div>
        </Tabs>
        
        <Accordion items={accordionItems} />
        
        <div class="showcase__row">
          <Tooltip text="Click to edit">
            <Button variant="secondary" size="sm">Hover me</Button>
          </Tooltip>
          <Button variant="danger" size="sm">Delete</Button>
        </div>
      </div>
    </Card>

    <!-- Empty State -->
    <Card title="Empty States" description="When there is no data.">
      <EmptyState title="No projects found" description="Get started by creating a new project.">
        <Button variant="primary">Create Project</Button>
      </EmptyState>
      
      <div style="margin-top:var(--space-5)">
        <p class="caption" style="margin-bottom:var(--space-2)">Loading skeleton</p>
        <Skeleton height="80px" />
      </div>
    </Card>
  </div>
</section>

<style>
  .showcase {
    padding-block: var(--space-12) var(--space-10);
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
  }

  .showcase__header {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .showcase__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: var(--space-5);
  }

  .showcase__stack {
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
  }

  .showcase__row {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    flex-wrap: wrap;
  }
</style>
